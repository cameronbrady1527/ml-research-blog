import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { PostListWithFilter } from "@/components/blog/post-list-with-filter";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "neurological-insights" in categories[]->slug.current
    && "detection-methods" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function NeuroDetectionMethods() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Detection Methods</h1>
                <p className="text-muted-foreground">Techniques for identifying neurological conditions</p>
            </div>

            <PostListWithFilter posts={posts} excludeTags={["Neurological Insights", "Detection Methods"]} />
        </main>
    )
}