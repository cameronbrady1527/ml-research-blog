import Link from "next/link";

export default function MLConcepts() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="">Machine Learning Concepts</h1>
            <p>Articles regarding ml concepts will go down here</p>
        </main>
    )
}