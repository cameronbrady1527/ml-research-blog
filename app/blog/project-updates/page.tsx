import Link from "next/link";
import { PostDisplay } from "@/components/blog/post-display";
import { PostControls } from "@/components/blog/post-controls";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "project-updates" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

export default function ProjectUpdates() {
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Project Updates</h1>
                <p className="text-muted-foreground">Research progress and findings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/blog/project-updates/wm-progress" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Weekly/Monthly Progress</h3>
                </Link>
                <Link href="/blog/project-updates/milestones" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Milestones</h3>
                </Link>
                <Link href="/blog/project-updates/challenges" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Challenges</h3>
                </Link>
            </div>

            <PostControls />
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    )
}