"use client";

import { useState, useMemo } from "react";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface PostListWithFilterProps {
  posts: SanityDocument[];
  excludeTags?: string[];
}

export function PostListWithFilter({ posts, excludeTags = [] }: PostListWithFilterProps) {
  // Extract all unique tags from posts, excluding specified tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach((category: string) => {
          if (!excludeTags.includes(category)) {
            tagSet.add(category);
          }
        });
      }
    });
    return Array.from(tagSet).sort();
  }, [posts, excludeTags]);

  // State for selected tags - default to all tags selected
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set(allTags));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort posts based on selected tags, search query, and sort option
  const filteredPosts = useMemo(() => {
    if (selectedTags.size === 0) return [];

    let filtered = posts.filter((post) => {
      if (!post.categories || !Array.isArray(post.categories)) return false;

      // Post should have at least one of the selected tags
      const matchesTag = post.categories.some((category: string) => selectedTags.has(category));
      if (!matchesTag) return false;

      // If there's a search query, check if post matches
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = post.title?.toLowerCase().includes(query);
        const excerptMatch = post.excerpt?.toLowerCase().includes(query);
        const categoryMatch = post.categories.some((cat: string) =>
          cat.toLowerCase().includes(query)
        );

        return titleMatch || excerptMatch || categoryMatch;
      }

      return true;
    });

    // Sort filtered posts
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "alphabetical":
          return (a.title || "").localeCompare(b.title || "");
        case "reverse-alphabetical":
          return (b.title || "").localeCompare(a.title || "");
        default:
          return 0;
      }
    });

    return sorted;
  }, [posts, selectedTags, searchQuery, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    setSelectedTags(new Set(allTags));
  };

  const removeAll = () => {
    setSelectedTags(new Set());
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Sort & Filter */}
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer appearance-none hover:bg-muted transition-colors"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">Alphabetically</option>
            <option value="reverse-alphabetical">Reverse Alphabetically</option>
          </select>

          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 border rounded-lg bg-background hover:bg-muted transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
                {selectedTags.size < allTags.length && (
                  <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    {selectedTags.size}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-4" align="end">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Filter by Tags</span>
                  <span className="text-xs text-muted-foreground">
                    {selectedTags.size} of {allTags.length}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={selectAll}
                    className="flex-1"
                  >
                    Select All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={removeAll}
                    className="flex-1"
                  >
                    Remove All
                  </Button>
                </div>

                <div className="border-t pt-2 max-h-64 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {allTags.map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center gap-2 cursor-pointer hover:bg-muted p-2 rounded"
                      >
                        <Checkbox
                          checked={selectedTags.has(tag)}
                          onCheckedChange={() => toggleTag(tag)}
                        />
                        <span className="text-sm">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Post Display */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            {searchQuery.trim()
              ? `No posts found matching "${searchQuery}"`
              : "No posts found with the selected tags."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group border rounded-lg p-6 hover:border-foreground hover:shadow-lg transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
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
                      <div className="flex gap-2">
                        {post.categories.map((category: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted rounded text-xs font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h2 className="text-2xl font-semibold group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
