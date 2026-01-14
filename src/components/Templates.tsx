"use client";

import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { useTemplates } from "@/hooks/queries/useTemplates";
import { getImageUrl } from "@/lib/image-url";
import { TemplatesSkeleton } from "@/components/skeletons/TemplatesSkeleton";

// =========================
// CVA Variants
// =========================

const sectionStyles = cva([
  "py-24 px-6",
  "bg-background-light dark:bg-background-dark",
]);

const cardStyles = cva([
  "flex flex-col group cursor-pointer",
]);

const imageContainerStyles = cva([
  "w-full aspect-square rounded-2xl mb-6",
  "bg-white dark:bg-card-dark",
  "flex items-center justify-center",
  "shadow-sm group-hover:shadow-lg",
  "transition-all duration-300",
  "relative overflow-hidden",
  "border border-gray-100 dark:border-gray-800",
]);

const badgeStyles = cva(
  "absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded-full z-10",
  {
    variants: {
      type: {
        new: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
        best: "bg-black text-white",
        default: "bg-black text-white",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const imageStyles = cva([
  "object-contain drop-shadow-md",
  "transition-transform duration-500",
]);

const titleStyles = cva([
  "font-bold text-lg mb-1",
  "group-hover:text-orange-500 transition-colors",
]);

// =========================
// Helpers
// =========================

const getHoverEffect = (index: number) => {
  const effects = [
    "group-hover:scale-110",
    "group-hover:rotate-6",
    "group-hover:-rotate-12",
    "group-hover:scale-110",
  ];
  return effects[index % effects.length];
};

const getBadgeType = (badge: string[]): "new" | "best" | "default" => {
  if (badge.some((b) => b.includes("new"))) return "new";
  if (badge.some((b) => b.includes("best"))) return "best";
  return "default";
};

// =========================
// Component
// =========================

export default function Templates() {
  const { data, isLoading, error } = useTemplates();

  if (isLoading) {
    return <TemplatesSkeleton />;
  }

  if (error) {
    return (
      <section className={sectionStyles()} id="templates">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-500">
            템플릿을 불러오는 중 오류가 발생했습니다.
          </div>
        </div>
      </section>
    );
  }

  const templates = data?.data?.templates || [];

  return (
    <section className={sectionStyles()} id="templates">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
            Choose Your Style
          </span>
          <h2 className="text-3xl tablet:text-5xl font-black font-display tracking-tight mb-4">
            DESIGN <span className="font-light">Templates</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            가장 빠르고 아름답게 시작하는 방법. 취향에 맞는 템플릿을 선택하세요.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-8">
          {templates.map((template, index) => {
            const badge = template.badge || [];
            const badgeType = getBadgeType(badge);
            const badgeText = badge[0]?.replace(/'/g, "").toUpperCase() || "";
            const hoverEffect = getHoverEffect(index);

            return (
              <Link
                key={template.id}
                href={template.projectUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={cardStyles()}
              >
                {/* Image Container */}
                <div className={imageContainerStyles()}>
                  {badge.length > 0 && (
                    <span className={badgeStyles({ type: badgeType })}>
                      {badgeText}
                    </span>
                  )}
                  <div className={`relative w-1/2 h-1/2 ${hoverEffect} ${imageStyles()}`}>
                    <Image
                      src={getImageUrl(template.imgUrl || "")}
                      alt={template.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-left px-2">
                  <h3 className={titleStyles()}>{template.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {template.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
