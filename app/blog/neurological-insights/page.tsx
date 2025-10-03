import Link from "next/link";
import { PostDisplay } from "@/components/blog/post-display";
import { PostControls } from "@/components/blog/post-controls";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "neurological-insights" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

export default function NeurologicalInsights() {
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Neurological Insights</h1>
                <p className="text-muted-foreground">Understanding the brain and neurological disorders</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/blog/neurological-insights/disorder-explanations" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Disorder Explanations</h3>
                </Link>
                <Link href="/blog/neurological-insights/detection-methods" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Detection Methods</h3>
                </Link>
                <Link href="/blog/neurological-insights/diagnosis-challenges" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Diagnosis Challenges</h3>
                </Link>
            </div>

            <PostControls />
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    )
}