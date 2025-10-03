import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";

import { PostDisplay } from "@/components/blog/post-display";
import { PostControls } from "@/components/blog/post-controls";

// Constant post query because always getting all posts at /blog
const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogHomePage() {
    return (
        <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Posts</h1>
                <p className="text-muted-foreground">Explore articles on machine learning and neuroscience</p>
            </div>

            <PostControls />
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    );
}