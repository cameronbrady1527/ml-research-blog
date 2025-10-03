import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import Link from "next/link";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ML Research Blog",
  description: "Created by Cameron Brady",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}