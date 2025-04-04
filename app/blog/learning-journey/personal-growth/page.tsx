import Link from "next/link";

export default function PersonalGrowth() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="font-bold">Personal Growth</h1>
            <p>Articles regarding my personal growth will live here</p>
        </main>
    )
}