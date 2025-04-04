import Link from "next/link";

export default function LessonsLearned() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="font-bold">Lessons Learned</h1>
            <p>Articles regarding my lessons learned will live here</p>
        </main>
    )
}