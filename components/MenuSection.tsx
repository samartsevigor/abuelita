"use client";

import { MenuBadges } from "@/components/MenuBadges";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { images } from "@/lib/images";
import { menuCategories, menuLegend, sides, type MenuCategory } from "@/lib/menu";
import { site } from "@/lib/site";
import { useState } from "react";

function formatPrice(price: number) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}

function CategoryPanel({ category }: { category: MenuCategory }) {
  return (
    <div className="space-y-1">
      {category.subtitle && (
        <p className="mb-6 text-sm text-muted">{category.subtitle}</p>
      )}

      <ul>
        {category.items.map((item) => {
          const featured = item.badges?.includes("featured");

          return (
          <li
            key={item.name}
            className={`group grid gap-3 py-5 md:grid-cols-[1fr_auto] md:gap-8 ${
              featured
                ? "my-3 rounded-xl border border-gold/25 bg-gold/5 px-4 md:px-6"
                : "border-t border-white/5 first:border-t-0"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl uppercase tracking-wide transition group-hover:text-terracotta md:text-2xl">
                  {item.name}
                </h3>
                <MenuBadges badges={item.badges} />
              </div>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
            <p className="font-display text-2xl text-terracotta md:text-right">
              {formatPrice(item.price)}
            </p>
          </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0].id);
  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <SectionBackdrop id="menu" image={images.sections.menu} overlay="default" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-terracotta">{site.menu.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-7xl">
            {site.subtitle}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{site.menu.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="menu-scroll flex gap-2 overflow-x-auto pb-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm uppercase tracking-[0.12em] transition ${
                  active === cat.id
                    ? "border-terracotta bg-terracotta/15 text-terracotta"
                    : "border-white/10 text-muted hover:border-white/25 hover:text-text"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <div className="glass-warm rounded-2xl p-6 md:p-10">
            <h3 className="font-display text-3xl uppercase tracking-wide text-terracotta md:text-4xl">
              {current.title}
            </h3>
            <CategoryPanel category={current} />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h4 className="font-display text-xl uppercase tracking-wide">Choose Your Side</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {sides.map((side) => (
                <li key={side} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-terracotta" />
                  {side}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="font-display text-xl uppercase tracking-wide">Legend</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {menuLegend.map(({ badge, label }) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted">
                  <MenuBadges badges={[badge]} />
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-6 font-script text-2xl text-terracotta">buen provecho</p>
          </div>
        </Reveal>
      </div>
    </SectionBackdrop>
  );
}
