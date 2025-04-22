"use client";

import { MainNav } from "@/components/main-nav";
import { SidebarNav } from "@/components/sidebar-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Search, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if we're on mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    // Mock loading state
    const timer = setTimeout(() => setLoading(false), 1000);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px] p-0">
              <div className="h-16 flex items-center px-6">
                <div className="flex items-center">
                  <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-primary" />
                  </div>
                  <span className="font-bold text-xl">Pulse</span>
                </div>
              </div>
              <Separator />
              <SidebarNav className="px-2" />
            </SheetContent>
          </Sheet>
          
          {!isMobile && (
            <div className="flex items-center mr-4">
              <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <div className="h-3.5 w-3.5 rounded-full bg-primary" />
              </div>
              {!isCollapsed && <span className="font-bold text-xl">Pulse</span>}
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-4 hidden md:flex" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          
          <div className="flex-1 flex items-center justify-between space-x-4">
            <MainNav className="hidden md:flex" />
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex relative rounded-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 h-9 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-[180px] lg:w-[240px]"
                />
              </div>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
              </Button>
              <ThemeToggle />
              <UserNav />
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex overflow-hidden">
        {!isMobile && (
          <aside className={cn(
            "border-r bg-background z-30 transition-all duration-300",
            isCollapsed ? "w-[72px]" : "w-[240px]"
          )}>
            <SidebarNav collapsed={isCollapsed} />
          </aside>
        )}
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {loading ? (
            <div className="space-y-6">
              <Skeleton className="h-8 w-[250px]" />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Skeleton className="h-[120px] rounded-xl" />
                <Skeleton className="h-[120px] rounded-xl" />
                <Skeleton className="h-[120px] rounded-xl" />
                <Skeleton className="h-[120px] rounded-xl" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Skeleton className="h-[400px] rounded-xl lg:col-span-4" />
                <Skeleton className="h-[400px] rounded-xl lg:col-span-3" />
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}