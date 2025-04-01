export interface MDXFrontMatter {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
    author?: string;
    // add any other front matter fields to expect
}

export interface ContentMeta {
    slug: string;
    frontMatter: MDXFrontMatter & { slug: string };
}