import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Post } from "@/types/post";

const postsQuery = groq`*[_type == "post"] {
    _id,
    title,
    slug
}
`;

export default async function BlogListing() {
    const posts = await client.fetch<Post[]>(postsQuery);

    return (
        <ul className="flex flex-col gap-4">
            {posts.map((post) => (
                <li key={post._id}>
                    <Link href={`/post/${post.slug.current}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}