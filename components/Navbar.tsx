"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onCtaClick?: () => void;
}

export function Navbar({ onCtaClick }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Guide", href: "/guide" },
    { label: "Schemes", href: "/schemes" },
    { label: "Licences", href: "/licences" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-black/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Black Logo Image */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/black-logo.png"
            alt="Prarambh"
            width={130}
            height={36}
            priority
            className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-85 transition-opacity"
          />
        </Link>

        {/* Center: Floating Pill Nav (All-White Theme) */}
        <nav
          className="hidden md:flex items-center bg-neutral-100/90 border border-black/[0.07] rounded-full p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 select-none cursor-pointer ${
                  isActive
                    ? "bg-white text-neutral-950 border border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.04)] font-semibold"
                    : "text-neutral-500 hover:text-neutral-950 hover:bg-black/[0.03] border border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: "Start Free" Button */}
        <div className="flex items-center gap-3">
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold px-5 py-2.5 border border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Start Free</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          ) : (
            <Link
              href="/guide"
              className="rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold px-5 py-2.5 border border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Start Free</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-current stroke-2">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Nav Row */}
      <div className="md:hidden px-4 pb-3 flex items-center justify-center">
        <nav className="flex items-center bg-neutral-100 border border-black/[0.07] rounded-full p-1 shadow-inner overflow-x-auto max-w-full no-scrollbar">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={`mob-${item.href}`}
                href={item.href}
                className={`text-[11px] font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-neutral-950 border border-black/[0.08] font-semibold shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
