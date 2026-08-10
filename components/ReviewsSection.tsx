import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews, reviewsSection } from "@/lib/reviews";

export function ReviewsSection() {
  const [headlineA, headlineB] = reviewsSection.headline;

  return (
    <section id="reviews" className="border-t border-white/5 bg-bg-elevated py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-terracotta">
            {reviewsSection.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase tracking-wide md:text-7xl">
            {headlineA}{" "}
            <span className="neon-cyan">{headlineB}</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">{reviewsSection.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.08}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
