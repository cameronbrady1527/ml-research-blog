import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

// circle back to this... assumes you are running the code from the root (/)
const contentDirectory = path.join(process.cwd(), 'content');

export async function getContentBySlug(
    directory: string,
    slug: string
) {
    const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // use gray-matter to parse the metadata of the post
    const { data: frontMatter, content } = matter(fileContents);

    // use next-mdx-remote to compile the MDX content
    const mdxSource = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: true,
        },
    })

    return {
        content: mdxSource.content,
        frontMatter: {
            ...frontMatter,
            slug,
        }
    }
}

export async function getAllSlugs(directory: string) {
    const fullPath = path.join(contentDirectory, directory);
    const fileNames = fs.readdirSync(fullPath);

    return fileNames
        .filter(filename => filename.endsWith('.mdx'))
        .map(filename => filename.replace(/\.mdx$/, ''));
}

// export async function getAllContent(directory: string) {
//     const slugs = getAllSlugs(directory);

//     const metadataContent = await Promise.all(
//         (await slugs).map(async (slug) => {
//             const { frontMatter } = await getContentBySlug(directory, slug);
//             return {
//                 slug,
//                 frontMatter
//             }
//         })
//     )

//     // sort by date if frontMatter contains date
//     return metadataContent.sort((a, b) => {
//         if (a.frontMatter.date && b.frontMatter.date) {
//             return new Date(b.frontMatter.date) > new Date(a.frontMatter.date) ? 1 : -1
//         }
//         return 0;
//     })
// }
