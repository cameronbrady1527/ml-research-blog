import Link from "next/link";

export default function NeuroDiagnosisChallenges() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            <h1 className="font-bold">Neurological Disorder Diagnosis Challenges</h1>
            <p>Articles regarding Neurological Disorder Diagnosis Challenges will live here</p>
        </main>
    )
}