import Link from 'next/link'
import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <div className="container">
            <nav className="py-12">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}