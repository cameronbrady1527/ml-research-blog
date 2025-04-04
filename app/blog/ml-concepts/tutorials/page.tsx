import Link from "next/link";

export default function MLTutorials() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="">Machine Learning Tutorials</h1>
            <p>Tutorials will go down here...</p>
        </main>
    )
}