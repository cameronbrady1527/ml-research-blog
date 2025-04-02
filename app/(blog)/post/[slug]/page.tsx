import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client'
import { Post } from "@/types/post";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
    title,
    mainImage,
    body
}
`;

interface PageParams {
  slug: string;
}

export default async function BlogPost({
  params: { slug },
}: {
  params: PageParams;
}) {
  const post = await client.fetch<Post>(postQuery, { slug });

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      {/* <Image
        src={urlFor(post.mainImage)}
        width={300}
        height={200}
        alt={post.title}
      /> */}
      <PortableText value={post.body} />
    </article>
  );
}