"use client";

import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [taglineA, taglineB] = site.tagline.split("&").map((part) => part.trim());

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden pt-24">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={images.hero.background}
          alt=""
          fill
          className="scale-110 object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-bg/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/35 to-bg/65" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_85%)]"
      />

      <div className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center px-5 py-16 md:px-8 md:py-24">
        <motion.div
          style={{ y: textY, opacity }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-neon-lime/90">
            {site.location}
          </p>

          <h1 className="font-script text-[clamp(3.25rem,10vw,7rem)] leading-none text-neon-pink">
            {site.name}
          </h1>

          <p className="mt-4 font-display text-[clamp(1.75rem,5vw,3.5rem)] uppercase leading-none tracking-wide text-text">
            {taglineA}{" "}
            <span className="text-terracotta">&</span>{" "}
            <span className="neon-cyan">{taglineB}</span>
          </p>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="#menu" className="btn-primary">
              Explore Menu
            </Link>
            <a
              href={site.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Reserve Now
            </a>
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.35em] text-muted/60">
            {site.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
