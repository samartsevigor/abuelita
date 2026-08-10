import type { MenuBadge } from "@/lib/menu";
import { Flame, Sparkles, Sprout, WheatOff } from "lucide-react";

const badgeConfig: Record<
  MenuBadge,
  { label: string; icon: typeof Flame; className: string }
> = {
  gf: { label: "GF", icon: WheatOff, className: "text-neon-cyan border-neon-cyan/40" },
  spicy: { label: "Spicy", icon: Flame, className: "text-neon-orange border-neon-orange/40" },
  veg: { label: "Veg", icon: Sprout, className: "text-neon-lime border-neon-lime/40" },
  featured: {
    label: "Special",
    icon: Sparkles,
    className: "text-gold border-gold/40",
  },
};

export function MenuBadges({ badges }: { badges?: MenuBadge[] }) {
  if (!badges?.length) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge) => {
        const config = badgeConfig[badge];
        const Icon = config.icon;
        return (
          <span
            key={badge}
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${config.className}`}
          >
            <Icon size={10} />
            {config.label}
          </span>
        );
      })}
    </div>
  );
}
