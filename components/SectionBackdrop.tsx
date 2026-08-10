"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";

type SectionBackdropProps = {
  image: string;
  children: ReactNode;
  className?: string;
  id?: string;
  parallax?: number;
  overlay?: "default" | "heavy" | "light" | "darker";
  imagePosition?: "center" | "bottom" | "top";
};

export function SectionBackdrop({
  image,
  children,
  className = "",
  id,
  parallax = 60,
  overlay = "default",
  imagePosition = "center",
}: SectionBackdropProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  const overlayClass = {
    default: "from-bg/95 via-bg/88 to-bg/92",
    heavy: "from-bg/97 via-bg/93 to-bg/96",
    light: "from-bg/88 via-bg/78 to-bg/90",
    darker: "from-bg via-bg/90 to-bg",
  }[overlay];

  const objectPosition = {
    top: "object-top",
    bottom: "object-bottom",
    center: "object-center",
  }[imagePosition];

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -inset-y-24 inset-x-0"
      >
        <Image
          src={image}
          alt=""
          fill
          className={`scale-105 object-cover ${objectPosition}`}
          sizes="100vw"
        />
      </motion.div>

      <div aria-hidden className={`absolute inset-0 bg-gradient-to-b ${overlayClass}`} />
      {overlay === "darker" && (
        <div aria-hidden className="absolute inset-0 bg-bg/8" />
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
