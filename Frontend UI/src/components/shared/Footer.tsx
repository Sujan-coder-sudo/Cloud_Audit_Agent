import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Logo className="h-7 w-7 text-primary" />
            <span className="font-headline text-lg font-bold">SecOps AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SecOps AI. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link>
            <Link href="/how-to-use" className="text-sm hover:text-primary transition-colors">Docs</Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
