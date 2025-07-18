import DashboardNav from "@/components/dashboard/DashboardNav";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 flex-col border-r border-border bg-card p-4 hidden md:flex">
        <div className="flex items-center gap-2 h-16 mb-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-lg font-bold">SecOps AI</span>
          </Link>
        </div>
        <DashboardNav />
      </aside>
      <main className="flex-1 p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
