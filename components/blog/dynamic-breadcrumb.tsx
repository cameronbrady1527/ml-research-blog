"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const categoryMap: Record<string, string> = {
  "ml-concepts": "ML Concepts",
  "neurological-insights": "Neurological Insights",
  "project-updates": "Project Updates",
  "learning-journey": "Learning Journey",
};

const subcategoryMap: Record<string, string> = {
  "algorithms": "Algorithms",
  "best-practices": "Best Practices",
  "math": "Math",
  "tutorials": "Tutorials",
  "disorder-explanations": "Disorder Explanations",
  "diagnosis-challenges": "Diagnosis Challenges",
  "detection-methods": "Detection Methods",
  "milestones": "Milestones",
  "challenges": "Challenges",
  "wm-progress": "WM Progress",
  "lessons-learned": "Lessons Learned",
  "personal-growth": "Personal Growth",
  "resources-discovered": "Resources Discovered",
};

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Parse the pathname to get breadcrumb segments
  const segments = pathname.split('/').filter(Boolean);

  // If we're just at /blog, don't show breadcrumbs
  if (segments.length <= 1) {
    return null;
  }

  // segments[0] is "blog"
  // segments[1] could be category name or "category" (for route group)
  // segments[2] could be subcategory or category (if route group)
  // segments[3] could be subcategory (if route group)

  let categorySlug = "";
  let subcategorySlug = "";
  let postSlug = "";

  // Check if using route groups
  if (segments[1] === "category") {
    // /blog/category/ml-concepts or /blog/category/ml-concepts/algorithms
    categorySlug = segments[2];
    subcategorySlug = segments[3] || "";
  } else {
    // /blog/ml-concepts or /blog/ml-concepts/algorithms or /blog/[slug]
    categorySlug = segments[1];

    if (segments.length === 3) {
      // Could be subcategory or post
      if (categoryMap[categorySlug]) {
        // It's a subcategory like /blog/ml-concepts/algorithms
        subcategorySlug = segments[2];
      } else {
        // It's a post
        postSlug = segments[1];
      }
    } else if (segments.length === 2 && !categoryMap[categorySlug]) {
      // It's a post at /blog/[slug]
      postSlug = segments[1];
    }
  }

  const categoryName = categoryMap[categorySlug];
  const subcategoryName = subcategoryMap[subcategorySlug];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Show category if it exists */}
        {categoryName && (
          <BreadcrumbItem className="hidden md:block">
            {subcategorySlug ? (
              <BreadcrumbLink href={`/blog/${categorySlug}`}>
                {categoryName}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{categoryName}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        )}

        {/* Show subcategory if it exists */}
        {subcategoryName && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{subcategoryName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {/* Show post title if it's a post page */}
        {postSlug && (
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {postSlug.replace(/-/g, ' ')}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
