import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import { portableTextComponents } from "@/components/blog/portable-text-components";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  image,
  publishedAt,
  body,
  "categories": categories[]->title
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
        ← Back to posts
      </Link>

      <article className="flex flex-col gap-6">
        {/* Header section */}
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>

          {/* Metadata bar */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.categories && post.categories.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2 flex-wrap">
                  {post.categories.map((category: string) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Featured image */}
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl border object-cover"
            width="550"
            height="310"
          />
        )}

        {/* Content */}
        <div className="max-w-none">
          {Array.isArray(post.body) && (
            <PortableText value={post.body} components={portableTextComponents} />
          )}
        </div>
      </article>
    </main>
  )
}

















// import { groq } from "next-sanity";
// import { client } from '@/sanity/lib/client'
// import { Post } from "@/types/post";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
//     title,
//     mainImage,
//     body
// }
// `;

// interface PageParams {
//   slug: string;
// }

// export default async function BlogPost({ params }: { params: Promise<PageParams> }) {
//   const { slug } = await params;
//   const post = await client.fetch<Post>(postQuery, { slug });

//   return (
//     <article className="prose">
//       <h1>{post.title}</h1>

//       {/* If the image exists, display the image; otherwise, display a filler image */}

//       {/* <Image 
//         src={urlFor(post.mainImage).url()}
//         width={300}
//         height={200}
//         alt={post.title}
//       /> */}

//       <Image 
//         src={"https://t4.ftcdn.net/jpg/00/96/11/55/360_F_96115522_p23SoNhipO4ORhIveKKlHESP94ozI92x.jpg"}
//         width={540}
//         height={360}
//         alt={"filler image"}
//       />
 
//       <PortableText value={post.body} />
//     </article>
//   );
// }