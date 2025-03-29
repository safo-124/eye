"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  const pathname = usePathname();
  const mobileSidebar = useMobileSidebar();

  React.useEffect(() => {
    mobileSidebar.onClose();
  }, [pathname, mobileSidebar]);

  if (!mobileSidebar.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={mobileSidebar.onClose}
      />
      
      {/* Mobile Navigation */}
      <div className="fixed inset-y-0 left-0 z-50 w-72">
        <div className="flex h-full flex-col overflow-y-auto border-r bg-background">
          <div className="flex items-center justify-between p-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              onClick={mobileSidebar.onClose}
            >
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={mobileSidebar.onClose}
            >
              <Icons.close className="h-4 w-4" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          <ScrollArea className="flex-1 px-4">
            <nav className="flex flex-col space-y-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-3 text-sm font-medium",
                    item.disabled && "cursor-not-allowed opacity-60",
                    pathname === item.href 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-accent/50"
                  )}
                  onClick={(e) => {
                    if (item.disabled) e.preventDefault();
                    mobileSidebar.onClose();
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            
            {children && (
              <div className="mt-4 border-t pt-4">
                {children}
              </div>
            )}
          </ScrollArea>
          
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <Link href="/privacy" onClick={mobileSidebar.onClose}>
                Privacy
              </Link>
              <Link href="/terms" onClick={mobileSidebar.onClose}>
                Terms
              </Link>
              <Link href="/contact" onClick={mobileSidebar.onClose}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}