"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export function PostControls() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          disabled
        />
      </div>

      {/* Sort & Filter */}
      <div className="flex gap-2">
        <select
          className="px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          disabled
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>

        <button
          className="px-4 py-2 border rounded-lg bg-background hover:bg-muted transition-colors flex items-center gap-2"
          disabled
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>
    </div>
  );
}
