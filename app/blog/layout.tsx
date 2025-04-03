import '@/app/globals.css';
import { ReactNode } from 'react'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <body>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </body>
      </html>
    )
}