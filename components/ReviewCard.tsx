"use client";

import type { Review } from "@/lib/reviews";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides =
    review.photos?.map((src) => ({
      src,
      alt: `Photo from ${review.name}'s review`,
    })) ?? [];

  return (
    <>
      <article className="glass-warm flex h-full flex-col rounded-2xl p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-terracotta/30">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-xl uppercase tracking-wide">{review.name}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-muted">{review.date}</span>
            </div>
          </div>
        </div>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-muted md:text-base">
          &ldquo;{review.text}&rdquo;
        </p>

        {slides.length > 0 && (
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 transition hover:border-terracotta/50"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </article>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
