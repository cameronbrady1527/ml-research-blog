import { PostDisplay } from "@/components/blog/post-display";
import { PostControls } from "@/components/blog/post-controls";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "Best Practices" in categories[]->title
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

export default function MLBestPractices() {
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Best Practices</h1>
                <p className="text-muted-foreground">Learn industry standards and proven methodologies</p>
            </div>

            <PostControls />
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    )
}