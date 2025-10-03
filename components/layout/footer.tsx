import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto max-w-5xl px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Cameron Brady. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://cameronbrady.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              cameronbrady.dev
            </Link>

            <div className="flex gap-4">
              <Link
                href="https://github.com/cameronbrady1527"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/cameron-brady-5770431b5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
