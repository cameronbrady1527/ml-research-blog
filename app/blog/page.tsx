import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";

import { PostDisplay } from "@/components/blog/post-display";

// Constant post query because always getting all posts at /blog
const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    "categories": categories[]->title
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogHomePage() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <h1 className="text-4xl font-bold mb-8">Posts</h1>
            <PostDisplay postsQuery={POSTS_QUERY} />
        </main>
    );
}