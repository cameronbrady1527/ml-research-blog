"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // NavigationMenuViewport
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/types/header-content";

import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground py-2 px-3",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems && navItems.map((navItem) => (
          <NavigationMenuItem key={navItem.name}>
            {/* Trigger is a link... hover over it to display its items */}
            <NavigationMenuTrigger>
              <Link href={navItem.url} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuTrigger>
            {/* Navigation menu content */}
            {navItem.items && (
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navItem.items.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      title={subItem.name}
                      href={subItem.url}
                    >
                      {subItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}