import { client } from "@/sanity/lib/client";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";

import { notFound } from "next/navigation";

const options = { next: { revalidate: 30 } };

export async function PostDisplay({ postsQuery }: { postsQuery: string }) {
  const posts = await client.fetch<SanityDocument[]>(postsQuery, {}, options);
  console.log(posts[0].categories);

  return (
    <ul className="flex flex-col gap-y-4">
      {
        (posts) ? 
        posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
          
        )) 
        : "404 >:(  No posts match this category"!
      }
    </ul>
  )
}