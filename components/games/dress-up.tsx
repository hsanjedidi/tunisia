"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  name: string;
  desc: string;
  image: string;
};

const ITEMS: Item[] = [
  {
    id: "chechia",
    name: "الشاشية",
    desc: "قبعة من الصوف الأحمر، صناعة تونسية عريقة.",
    image: "/images/games/item-chechia.png",
  },
  {
    id: "jebba",
    name: "الجبة",
    desc: "لباس تقليدي أنيق مطرّز يُلبس في الأعياد.",
    image: "/images/games/item-jebba.png",
  },
  {
    id: "sefsari",
    name: "السفساري",
    desc: "حجاب حريري ناصع البياض من التراث التونسي.",
    image: "/images/games/item-sefsari.png",
  },
  {
    id: "balgha",
    name: "البلغة",
    desc: "حذاء جلدي تقليدي مريح بلون ذهبي.",
    image: "/images/games/item-balgha.png",
  },
];

export function DressUp() {
  const [worn, setWorn] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setWorn((w) => ({ ...w, [id]: !w[id] }));
  const reset = () => setWorn({});
  const wornCount = Object.values(worn).filter(Boolean).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      {/* Character stage */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl border-4 border-secondary/40 bg-card shadow-lg">
          <Image
            src="/images/games/character-base.png"
            alt="شخصية تونسية"
            fill
            className="object-contain"
            priority
          />
          {ITEMS.map((item) =>
            worn[item.id] ? (
              <Image
                key={item.id}
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className={cn(
                  "object-contain transition-opacity duration-300",
                  item.id === "chechia" && "scale-[0.4] -translate-y-[28%]",
                  item.id === "jebba" && "scale-[0.7] translate-y-[8%]",
                  item.id === "sefsari" &&
                    "scale-[0.85] translate-y-[2%] opacity-90",
                  item.id === "balgha" && "scale-[0.35] translate-y-[42%]",
                )}
              />
            ) : null,
          )}
        </div>
        <p className="rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
          {wornCount > 0
            ? `ارتديتَ ${wornCount} من القطع`
            : "اختر قطعة لتبدأ التلبيس"}
        </p>
      </div>

      {/* Wardrobe */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            خزانة الملابس التقليدية
          </h2>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            <RotateCcw className="size-4" />
            تجريد
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item) => {
            const active = !!worn[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={cn(
                  "group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-4 text-center transition",
                  active
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-secondary/50 hover:bg-muted",
                )}
                aria-pressed={active}
              >
                {active && (
                  <span className="absolute end-3 top-3 inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                )}
                <div className="relative size-24">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
