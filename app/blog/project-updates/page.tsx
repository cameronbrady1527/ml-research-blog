import Link from "next/link";

export default function ProjectUpdates() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <ul>
                <li>
                    <Link href="/blog" className="hover:underline">
                        ← Back to posts
                    </Link>
                </li>
                <li>
                    <Link href="/blog/project-updates/wm-progress" className="hover:underline">
                        Weekly/Monthly Progress
                    </Link>
                </li>
                <li>
                    <Link href="/blog/project-updates/milestones" className="hover:underline">
                        Milestones Achieved
                    </Link>
                </li>
                <li>
                    <Link href="/blog/project-updates/challenges" className="hover:underline">
                        Challenges Overcome
                    </Link>
                </li>
            </ul>
            <h1 className="font-bold">Project Updates</h1>
            <p>Articles regarding project updates will go down here</p>
        </main>
    )
}