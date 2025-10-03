import { PostDisplay } from "@/components/blog/post-display";
import { PostControls } from "@/components/blog/post-controls";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "Algorithms" in categories[]->title
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

export default function MLAlgorithms() {
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Algorithms</h1>
                <p className="text-muted-foreground">Deep dive into machine learning algorithms and models</p>
            </div>

            <PostControls />
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    )
}