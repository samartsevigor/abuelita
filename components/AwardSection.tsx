import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { Trophy } from "lucide-react";
import Image from "next/image";

export function AwardSection() {
  const { award } = site;
  const [headlineA, headlineB] = award.headline;

  return (
    <SectionBackdrop
      id="award"
      image={images.sections.award}
      overlay="darker"
      imagePosition="top"
      className="border-y border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <Reveal>
          <Parallax offset={24}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gold/15 blur-2xl" />
              <div className="glass-warm relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/burger-award.jpg"
                  alt={`${site.name} — ${award.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Parallax>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-widest text-gold">
            <Trophy size={14} />
            {award.badge}
          </div>

          <h2 className="mt-6 font-display text-5xl uppercase leading-none tracking-wide md:text-6xl">
            <span className="text-terracotta">{headlineA}</span>
            <br />
            <span className="text-text">{headlineB}</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted">{award.story}</p>

          <p className="mt-3 text-sm text-muted/70">
            {award.sponsorFull} · {award.title}
          </p>
        </Reveal>
      </div>
    </SectionBackdrop>
  );
}
