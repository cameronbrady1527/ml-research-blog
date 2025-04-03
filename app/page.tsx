import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Home Page
      </h1>
      <h1>
        <Link href={'/blog'}>Blog</Link>
      </h1>
    </div>
    
  );
}
