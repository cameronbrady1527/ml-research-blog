import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Research",
    url: "#",
    items: [
      {
        name: "Clinical",
        url: "#",
        description: "clinical research applications"
      },
      {
        name: "Methodology",
        url: "#",
        description: "research methodology"
      },
    ],
  },
  {
    name: "Blog",
    url: "/blog",
    items: [
      {
        name: "ML Concepts",
        url: "/blog/ml-concepts",
        description: "Explanations and explorations of machine learning concepts, algorithms, and best practices"
      },
      {
        name: "Neurological Insights",
        url: "/blog/neurological-insights",
        description: "Insights into neurology and neurological disorders"
      },
      {
        name: "Project Updates",
        url: "/blog/project-updates",
        description: "Updates on research and active projects"
      },
      {
        name: "Learning Journey",
        url: "/blog/learning-journey",
        description: "Come explore my learning and research journey!"
      },
    ],
  },
  {
    name: "Code + Projects",
    url: "#",
    items: [
      {
        name: "Interactive Code Demos",
        url: "#",
        description: "Visualize how code is working under-the-hood and how it adds a whole other dimension of perception!"
      },
    ],
  },
  {
    name: "About",
    url: "#",
  },
];

const RECENT_POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    publishedAt
}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const recentPosts = await client.fetch<SanityDocument[]>(RECENT_POSTS_QUERY, {}, options);

  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold"><Link href="/">ML Research Blog</Link></div>
          <Header navItems={navItems} />
        </div>
      </header>
      <div className="container mx-auto max-w-5xl px-8">
      {/* Hero Section - Narrative Experience */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center py-20">
        <div className="mb-8">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 tracking-wider uppercase">Research & Exploration</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Machine Learning<br />& Neuroscience
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Cameron Brady</p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          At the intersection of AI and neurology, exploring algorithms, insights, and applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/blog"
            className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Read the Blog
          </Link>
          <Link
            href="#recent"
            className="px-8 py-3 border border-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors"
          >
            Latest Posts
          </Link>
        </div>
      </section>

      {/* Recent Posts - More Prominent */}
      <section id="recent" className="py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Recent Work</h2>
          <p className="text-muted-foreground">Latest thoughts and research</p>
        </div>

        {recentPosts && recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {recentPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="border rounded-lg p-6 hover:border-foreground hover:shadow-lg transition-all"
              >
                <p className="text-xs text-muted-foreground mb-3">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <h3 className="text-xl font-semibold mb-2 hover:underline">{post.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mb-8">No posts yet. Check back soon.</p>
        )}

        <div className="text-center">
          <Link href="/blog" className="inline-block text-lg font-semibold hover:underline">
            View all posts →
          </Link>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Explore Topics</h2>
          <p className="text-muted-foreground">Deep dives into specific areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/blog/ml-concepts" className="border rounded-lg p-8 hover:border-foreground hover:shadow-lg transition-all group">
            <h3 className="text-2xl font-semibold mb-3 group-hover:underline">ML Concepts</h3>
            <p className="text-muted-foreground">
              Algorithms, best practices, and theory
            </p>
          </Link>

          <Link href="/blog/neurological-insights" className="border rounded-lg p-8 hover:border-foreground hover:shadow-lg transition-all group">
            <h3 className="text-2xl font-semibold mb-3 group-hover:underline">Neurological Insights</h3>
            <p className="text-muted-foreground">
              Understanding the brain and disorders
            </p>
          </Link>

          <Link href="/blog/project-updates" className="border rounded-lg p-8 hover:border-foreground hover:shadow-lg transition-all group">
            <h3 className="text-2xl font-semibold mb-3 group-hover:underline">Project Updates</h3>
            <p className="text-muted-foreground">
              Research progress and findings
            </p>
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
