import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { PostListWithFilter } from "@/components/blog/post-list-with-filter";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "learning-journey" in categories[]->slug.current
    && "lessons-learned" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function LessonsLearned() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Lessons Learned</h1>
                <p className="text-muted-foreground">Key takeaways and insights from experience</p>
            </div>

            <PostListWithFilter posts={posts} excludeTags={["Learning Journey", "Lessons Learned"]} />
        </main>
    )
}