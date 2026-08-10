import { MealGallery } from "@/components/MealGallery";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { MapPin, Martini, UtensilsCrossed } from "lucide-react";

const icons = [Martini, UtensilsCrossed, MapPin];

export function VibeSection() {
  const [headlineA, headlineB] = site.vibe.headline;

  return (
    <SectionBackdrop
      id="vibe"
      image={images.sections.vibe}
      overlay="light"
      className="border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-terracotta">{site.vibe.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-7xl">
            {headlineA}{" "}
            <span className="neon-cyan">{headlineB}</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">{site.vibe.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {site.vibe.highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="glass h-full rounded-2xl p-6">
                  <Icon className="mb-4 text-terracotta" size={26} />
                  <h3 className="font-display text-2xl uppercase tracking-wide">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <MealGallery />
        </Reveal>
      </div>
    </SectionBackdrop>
  );
}
