import Link from "next/link";

export default function MLTutorials() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="">Machine Learning Best Practices</h1>
            <p>Best Practices in ML will live here</p>
        </main>
    )
}