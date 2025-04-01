import { MDXFrontMatter } from "./mdx-front-matter";

export interface MDXContent {
    content: React.ReactNode;
    frontMatter: MDXFrontMatter & { slug: string };
}