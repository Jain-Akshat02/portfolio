// src/components/MainNav.tsx
"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";

export default function MainNav() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3 px-3 overflow-hidden">
      <div className="max-w-6xl w-min border-2px border-white/10">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="grid grid-cols-1 gap-4">
            <ProductItem
              title="Home"
              description="My Next.js portfolio"
              href="/"
              src="/image.png"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="grid grid-cols-1 gap-4">
            <ProductItem
              title="Portfolio"
              description="My Next.js portfolio"
              href="https://example.com"
              src="/project-thumb.png"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="flex flex-col gap-2">
            <HoveredLink href="#about">About</HoveredLink>
            <HoveredLink href="#skills">Skills</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="p-2">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Email: you@example.com
            </p>
          </div>
        </MenuItem>
        </Menu>
      </div>
    </div>
  );
}