import Link from "next/link";

export default function MLMath() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="font-bold">Machine Learning Math</h1>
            <p>Posts regarding machine learning math will live here</p>
        </main>
    )
}