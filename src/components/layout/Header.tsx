"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { navItems } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-[76px] border-b border-border bg-bg">
      <Container className="flex h-full items-center justify-between">
        <a
          href="#home"
          aria-label="Go to homepage"
          className="text-lg font-bold tracking-tight text-text-primary no-underline"
        >
          {siteConfig.name}
        </a>

        <DesktopNav />

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-btn border border-border-strong md:hidden"
        >
          <span className="block h-[2px] w-[18px] rounded-full bg-text-primary" />
          <span className="block h-[2px] w-[18px] rounded-full bg-text-primary" />
          <span className="block h-[2px] w-[18px] rounded-full bg-text-primary" />
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col border-b border-border bg-surface px-7 pb-5 pt-2 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-base font-medium text-text-secondary last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
