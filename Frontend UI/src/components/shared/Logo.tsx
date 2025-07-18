import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 9.5V7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 17V14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 12H7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 12H14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.05 10.05L8.5 8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 15.5L13.95 13.95" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.05 13.95L8.5 15.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 8.5L13.95 10.05" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
