import Link from "next/link";

export default function LearningJourney() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <ul>
                <li>
                    <Link href="/blog" className="hover:underline">
                        ← Back to posts
                    </Link>
                </li>
                <li>
                    <Link href="/blog/learning-journey/personal-growth" className="hover:underline">
                        Personal Growth
                    </Link>
                </li>
                <li>
                    <Link href="/blog/learning-journey/lessons-learned" className="hover:underline">
                        Lessons learned
                    </Link>
                </li>
                <li>
                    <Link href="/blog/learning-journey/resources-discovered" className="hover:underline">
                        Resources Discovered
                    </Link>
                </li>
            </ul>
            <h1 className="text-4xl font-bold mb-8">Learning Journey Content</h1>
            <p>Articles regarding my learning journey will go down here</p>
        </main>
    )
}