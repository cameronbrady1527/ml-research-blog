import { client } from "@/sanity/lib/client";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";

const options = { next: { revalidate: 30 } };

export async function PostDisplay({ postsQuery }: { postsQuery: string }) {
  const posts = await client.fetch<SanityDocument[]>(postsQuery, {}, options);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No posts found. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="group border rounded-lg p-6 hover:border-foreground hover:shadow-lg transition-all"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.categories && post.categories.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.categories.map((category: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <h2 className="text-2xl font-semibold group-hover:text-muted-foreground transition-colors">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}