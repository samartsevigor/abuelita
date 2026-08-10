import { demoNotice } from "@/lib/demo";

export function DemoBanner() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-5">
      <div className="pointer-events-auto max-w-md rounded-xl border border-red-800/50 bg-red-600 px-6 py-4 text-center text-sm font-semibold leading-relaxed text-white shadow-[0_8px_32px_rgba(220,38,38,0.55)] sm:max-w-lg sm:text-base">
        {demoNotice}
      </div>
    </div>
  );
}
