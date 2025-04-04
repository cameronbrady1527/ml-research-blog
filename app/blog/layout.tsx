import '@/app/globals.css';
import { ReactNode } from 'react'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Header
} from "@/components/layout/header";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Research",
    url: "#", //   "/research"
    items: [
      {
        name: "Clinical",
        url: "#", //   "/research/clinical"
        description: "clinical research applications"
      },
      {
        name: "Methodology",
        url: "#", //   "/research/methodology"
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
    url: "#", //   "/code",
    items: [
      {
        name: "Interactive Code Demos",
        url: "#", //   "/code/demo"
        description: "Visualize how code is working under-the-hood and how it adds a whole other dimension of perception!"
      },
      // add another item?
    ],
  },
  {
    name: "About",
    url: "#", //   "/about"
    // no items at the moment
  },
];

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
      <SidebarProvider className="flex">
        <AppSidebar />
        <main className="flex-1">
          <SidebarInset className="sticky top-0">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        ML Concepts
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Algorithms</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              {/* Here is where the navigation menu will live */}
              <div className="ml-auto">
                <Header navItems={navItems}/>
              </div>
            </header>
          </SidebarInset> 
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="rounded-xl bg-muted/50">
              {children}
            </div>
            {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
          </div>   
        </main>
      </SidebarProvider>
    )
}