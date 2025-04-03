import '@/app/globals.css';
import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
}