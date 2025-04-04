import Link from "next/link";

export default function MLConcepts() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <ul>
                <li>
                    <Link href="/blog" className="hover:underline">
                        ← Back to posts
                    </Link>
                </li>
                <li>
                    <Link href="/blog/ml-concepts/tutorials" className="hover:underline">
                        Tutorials
                    </Link>
                </li>
                <li>
                    <Link href="/blog/ml-concepts/algorithms" className="hover:underline">
                        Algorithms
                    </Link>
                </li>
                <li>
                    <Link href="/blog/ml-concepts/math" className="hover:underline">
                        Math
                    </Link>
                </li>
                <li>
                    <Link href="/blog/ml-concepts/best-practices" className="hover:underline">
                        Best Practices
                    </Link>
                </li>
            </ul>
            <h1 className="font-bold">Machine Learning Concepts</h1>
            <p>Articles regarding ml concepts will go down here</p>
        </main>
    )
}