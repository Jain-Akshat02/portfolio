// src/components/MainNav.tsx
"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuItem
} from "@/components/ui/navbar-menu";

export default function MainNav() {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-3 px-3 overflow-hidden">
      <div className="max-w-6xl w-min border-2px border-white/10">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="grid grid-cols-1 gap-4"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div
              onClick={() => scrollToSection("#projects")}
              className="cursor-pointer p-2"
            >
              Projects
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <a href="#contact" className="block p-2">
              Contact
            </a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
