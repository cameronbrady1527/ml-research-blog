import { getContentBySlug, getAllSlugs } from '@/lib/mdx/mdx-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const slugs: string[] = await getAllSlugs('blog');

    return slugs.map((slug) => ({
        slug,
    }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    try {
        const { content, frontMatter } = await getContentBySlug('blog', params.slug);

        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
                {frontMatter.date && (
                    <p className="text=gray-500 mb-8">
                        {new Date(frontMatter.date).toLocaleDateString()}
                    </p>
                )}
                {frontMatter.description && (
                    <p className="">

                    </p>
                )}
                {content}
            </div>
        )
    } catch (error) {
        console.log(error);
        return notFound();
    }
}