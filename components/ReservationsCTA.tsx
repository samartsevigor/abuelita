import { Reveal } from "@/components/Reveal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { MapPin } from "lucide-react";

export function ReservationsCTA() {
  const [headlineA, headlineB] = site.reserve.headline;

  return (
    <SectionBackdrop
      id="reserve"
      image={images.sections.reserve}
      overlay="light"
      imagePosition="bottom"
      className="py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-script text-3xl text-neon-pink md:text-4xl">{site.reserve.script}</p>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-wide md:text-6xl">
            {headlineA}{" "}
            <span className="text-terracotta">{headlineB}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">{site.reserve.text}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={site.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book on TBDine
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {site.instagramHandle}
            </a>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-terracotta" />
            {site.location}
          </div>
        </Reveal>
      </div>
    </SectionBackdrop>
  );
}
