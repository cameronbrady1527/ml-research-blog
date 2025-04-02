import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client'
import { Post } from "@/types/post";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
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

export default async function BlogPost({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = await client.fetch<Post>(postQuery, { slug });

  return (
    <article className="prose">
      <h1>{post.title}</h1>

      {/* If the image exists, display the image; otherwise, display a filler image */}

      {/* <Image 
        src={urlFor(post.mainImage).url()}
        width={300}
        height={200}
        alt={post.title}
      /> */}

      <Image 
        src={"https://t4.ftcdn.net/jpg/00/96/11/55/360_F_96115522_p23SoNhipO4ORhIveKKlHESP94ozI92x.jpg"}
        width={540}
        height={360}
        alt={"filler image"}
      />
 
      <PortableText value={post.body} />
    </article>
  );
}