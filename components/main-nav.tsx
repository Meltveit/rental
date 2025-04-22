"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  
  const links = [
    {
      name: "Dashboard",
      href: "/",
      active: pathname === "/"
    },
    {
      name: "Analytics",
      href: "/analytics",
      active: pathname === "/analytics"
    },
    {
      name: "Reports",
      href: "/reports",
      active: pathname === "/reports"
    },
    {
      name: "Customers",
      href: "/customers",
      active: pathname === "/customers"
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-6 lg:space-x-8", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            link.active ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}