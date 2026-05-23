"use client";

import Link from "next/link";
import Image from "next/image";

export default function AdminNavbar({ userEmail }: { userEmail: string }) {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center bg-white p-1 rounded-sm">
              <div className="relative w-32 h-8">
                <Image
                  src="/assets/logo.webp"
                  alt="OJ Advocates LLP"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </Link>
            <div className="ml-6 flex items-center space-x-4">
              <span className="font-semibold text-accent tracking-widest uppercase text-sm">
                Admin Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 hidden sm:block">
              Logged in as <span className="font-medium text-white">{userEmail}</span>
            </span>
            <Link
              href="/api/auth/signout?callbackUrl=/"
              className="bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
