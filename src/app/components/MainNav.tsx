// src/components/MainNav.tsx
"use client";
import React from "react";

const navLinks = [
  { label: "Home", href: "#", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writings", href: "#writings" },
  { label: "Contact", href: "#contact" },
];

export default function MainNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3 px-4">
      <div className="flex items-center gap-1 sm:gap-2">
        {navLinks.map(({ label, href, onClick }) => (
          <a
            key={label}
            href={href}
            onClick={onClick}
            className="px-3 py-1.5 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
