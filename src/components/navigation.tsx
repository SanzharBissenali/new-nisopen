"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              nisOpen
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            
            <Link
              href="/search"
              className="text-foreground hover:text-primary transition-colors"
            >
              Search
            </Link>
            
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                
                {session.user.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Admin
                  </Link>
                )}
                
                <span className="text-sm text-muted-foreground">
                  {session.user.name || session.user.email}
                </span>
                
                <button
                  onClick={() => signOut()}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}