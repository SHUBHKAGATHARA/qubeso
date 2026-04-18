"use client";

import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Bell, HelpCircle, FileText, Users, Settings } from "lucide-react";
import Image from "next/image";

// Custom InfoMenu Component
function InfoMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Information</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          Help Center
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          Documentation
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users className="mr-2 h-4 w-4" />
          Community
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          System Status
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Custom NotificationMenu Component
function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 relative">
          <Bell className="h-4 w-4" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
          >
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notifications
          <Badge variant="secondary" className="ml-2">3 new</Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start p-3">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">New feature released</span>
            <span className="text-xs text-muted-foreground">2m ago</span>
          </div>
          <span className="text-sm text-muted-foreground mt-1">
            Check out our latest updates and improvements
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex-col items-start p-3">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">System maintenance</span>
            <span className="text-xs text-muted-foreground">1h ago</span>
          </div>
          <span className="text-sm text-muted-foreground mt-1">
            Scheduled maintenance tonight from 2-4 AM
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex-col items-start p-3">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">Welcome to the platform</span>
            <span className="text-xs text-muted-foreground">3h ago</span>
          </div>
          <span className="text-sm text-muted-foreground mt-1">
            Get started with our quick tour guide
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Custom UserMenu Component
function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 rounded-full">
          <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
            U
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    submenu: true,
    type: "description" as const,
    items: [
      {
        href: "/services#web-development",
        label: "Web Development",
        description: "Custom websites and web applications.",
      },
      {
        href: "/services#mobile-apps",
        label: "Mobile Apps",
        description: "iOS and Android app development.",
      },
      {
        href: "/services#3d-services",
        label: "3D Services",
        description: "3D modeling and visualization.",
      },
    ],
  },
  {
    label: "Resources",
    submenu: true,
    type: "icon" as const,
    items: [
      { href: "/about", label: "About Us", icon: "InfoIcon" as const },
      { href: "/portfolio", label: "Portfolio", icon: "BookOpenIcon" as const },
      { href: "/contact", label: "Contact", icon: "LifeBuoyIcon" as const },
    ],
  },
];

export default function NavigationMenu4() {
  return (
    <header className="border-b px-4 md:px-6 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-primary hover:text-primary/90 flex items-center">
              <Image
                src="/qubeso-logo-transparent.png"
                alt="Qubeso Tech"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            {/* Navigation menu */}
            <div className="max-md:hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      {link.submenu ? (
                        <>
                          <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium">
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className={cn(
                              "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                              link.type === "description" && "md:grid-cols-1"
                            )}>
                              {link.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={item.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      {/* Display icon if present */}
                                      {link.type === "icon" && "icon" in item && (
                                        <div className="flex items-center gap-2">
                                          {item.icon === "BookOpenIcon" && (
                                            <BookOpenIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          {item.icon === "LifeBuoyIcon" && (
                                            <LifeBuoyIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          {item.icon === "InfoIcon" && (
                                            <InfoIcon
                                              size={16}
                                              className="text-foreground opacity-60"
                                              aria-hidden="true"
                                            />
                                          )}
                                          <div className="text-sm font-medium leading-none">
                                            {item.label}
                                          </div>
                                        </div>
                                      )}

                                      {/* Display label with description if present */}
                                      {link.type === "description" && "description" in item && (
                                        <>
                                          <div className="text-sm font-medium leading-none">
                                            {item.label}
                                          </div>
                                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            {item.description}
                                          </p>
                                        </>
                                      )}
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-primary py-1.5 px-2 font-medium"
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport />
              </NavigationMenu>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <InfoMenu />
            <NotificationMenu />
          </div>
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="/login">Sign In</a>
          </Button>
          <Button asChild size="sm" className="text-sm bg-brand-primary hover:bg-brand-hover">
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
