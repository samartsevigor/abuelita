"use client";

import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-0 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-bg-card/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#" className="group flex flex-col leading-none">
          <span className="font-script text-2xl text-neon-pink md:text-3xl">{site.name}</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-muted">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <a href={site.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2 text-sm">
            Book a Table
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="bg-bg-card/80 px-5 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.12em]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 text-center text-sm"
            >
              Book a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
