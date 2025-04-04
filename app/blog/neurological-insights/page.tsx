import Link from "next/link";

export default function NeurologicalInsights() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <ul>
                <li>
                    <Link href="/blog" className="hover:underline">
                        ← Back to posts
                    </Link>
                </li>
                <li>
                    <Link href="/blog/neurological-insights/disorder-explanations" className="hover:underline">
                        Disorder Explanations
                    </Link>
                </li>
                <li>
                    <Link href="/blog/neurological-insights/detection-methods" className="hover:underline">
                        Detection Methods
                    </Link>
                </li>
                <li>
                    <Link href="/blog/neurological-insights/diagnosis-challenges" className="hover:underline">
                        Diagnosis Challenges
                    </Link>
                </li>
            </ul>
            <h1 className="font-bold">Neurological Insights Content</h1>
            <p>Articles regarding neurological insights will go down here</p>
        </main>
    )
}