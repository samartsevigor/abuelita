import { site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-elevated">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-script text-3xl text-neon-pink">{site.name}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-muted">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-muted">{site.location}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-wider text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/5 px-5 py-4 text-center text-xs text-muted/60 md:px-8">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
