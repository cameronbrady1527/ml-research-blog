import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { PostListWithFilter } from "@/components/blog/post-list-with-filter";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && "learning-journey" in categories[]->slug.current
    ]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function LearningJourney() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Learning Journey</h1>
                <p className="text-muted-foreground">Personal growth, lessons learned, and resources discovered</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/blog/learning-journey/personal-growth" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Personal Growth</h3>
                </Link>
                <Link href="/blog/learning-journey/lessons-learned" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Lessons Learned</h3>
                </Link>
                <Link href="/blog/learning-journey/resources-discovered" className="border rounded-lg p-4 hover:border-foreground hover:shadow transition-all text-center">
                    <h3 className="font-semibold">Resources Discovered</h3>
                </Link>
            </div>

            <PostListWithFilter posts={posts} excludeTags={["Learning Journey"]} />
        </main>
    )
}