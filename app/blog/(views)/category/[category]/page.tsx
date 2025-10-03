import Link from "next/link";
import { PostDisplay } from "@/components/blog/post-display";

// Constant post query because always getting all posts at /blog


const options = { next: { revalidate: 30 } };

export default async function BlogCategoryPage({ params }: { params: { category: string } }) {
    const postsQuery = `*[
        _type == "post"
        && defined(slug.current)
        && ${await params.category} in categories[]->title
        ]|order(publishedAt desc)[0...12]{
        _id,
        title,
        slug,
        publishedAt,
        "categories": categories[]->title
    }`;
    
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            {params.category}
            <h1 className="text-4xl font-bold mb-8">Posts</h1>
            <PostDisplay postsQuery={postsQuery} />
        </main>
    );
}