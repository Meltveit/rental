"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  LineChart,
  Settings,
  Users,
  Layers,
  HelpCircle,
  LogOut,
  FolderClosed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export function SidebarNav({
  className,
  collapsed = false,
  ...props
}: SidebarNavProps) {
  const pathname = usePathname();

  const routes = [
    {
      section: "Overview",
      items: [
        {
          title: "Dashboard",
          href: "/",
          icon: Home,
          active: pathname === "/",
        },
        {
          title: "Analytics",
          href: "/analytics",
          icon: BarChart3,
          active: pathname === "/analytics",
        },
        {
          title: "Reports",
          href: "/reports",
          icon: LineChart,
          active: pathname === "/reports",
        },
      ],
    },
    {
      section: "Management",
      items: [
        {
          title: "Customers",
          href: "/customers",
          icon: Users,
          active: pathname === "/customers",
        },
        {
          title: "Projects",
          href: "/projects",
          icon: FolderClosed,
          active: pathname === "/projects",
        },
        {
          title: "Products",
          href: "/products",
          icon: Layers,
          active: pathname === "/products",
        },
      ],
    },
    {
      section: "System",
      items: [
        {
          title: "Settings",
          href: "/settings",
          icon: Settings,
          active: pathname === "/settings",
        },
        {
          title: "Help & Support",
          href: "/help",
          icon: HelpCircle,
          active: pathname === "/help",
        },
      ],
    },
  ];

  return (
    <ScrollArea className={cn("h-full py-6", className)} {...props}>
      <div className="flex flex-col h-full justify-between">
        <div className="px-3 space-y-6">
          {routes.map((route) => (
            <div key={route.section} className="space-y-3">
              {!collapsed && (
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase px-4">
                  {route.section}
                </h4>
              )}
              
              <div className="space-y-1">
                {route.items.map((item) => (
                  <Button
                    key={item.href}
                    variant={item.active ? "secondary" : "ghost"}
                    size={collapsed ? "icon" : "default"}
                    className={cn(
                      "w-full justify-start",
                      item.active
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        : "hover:bg-transparent hover:text-primary hover:underline"
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className={cn("h-4 w-4", collapsed ? "" : "mr-3")} />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-3 mt-auto">
          <Separator className="my-4" />
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-transparent"
          >
            <LogOut className={cn("h-4 w-4", collapsed ? "" : "mr-3")} />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}