import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { PostListWithFilter } from "@/components/blog/post-list-with-filter";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "ml-concepts" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function MLConcepts() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">ML Concepts</h1>
                <p className="text-muted-foreground">Explore machine learning algorithms, best practices, and theory</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Link href="/blog/ml-concepts/algorithms" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Algorithms</h3>
                </Link>
                <Link href="/blog/ml-concepts/best-practices" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Best Practices</h3>
                </Link>
                <Link href="/blog/ml-concepts/math" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Math</h3>
                </Link>
                <Link href="/blog/ml-concepts/tutorials" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Tutorials</h3>
                </Link>
            </div>

            <PostListWithFilter posts={posts} excludeTags={["ML Concepts"]} />
        </main>
    )
}