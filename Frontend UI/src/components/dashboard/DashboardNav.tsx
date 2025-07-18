"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { BarChart2, Bot, FileUp, ListChecks } from "lucide-react";

const navLinks = [
  { href: "/dashboard", label: "Run Audit", icon: ListChecks },
  { href: "/dashboard/logs", label: "View Logs", icon: BarChart2 },
  { href: "/dashboard/chat", label: "Agent Chat", icon: Bot },
  { href: "/dashboard/upload", label: "Upload Configs", icon: FileUp },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Button
            key={link.label}
            asChild
            variant={isActive ? "secondary" : "ghost"}
            className="justify-start"
          >
            <Link href={link.href} className="flex items-center gap-3">
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
