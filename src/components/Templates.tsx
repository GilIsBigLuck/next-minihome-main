"use client";

import { useTemplates } from "@/hooks/queries/useTemplates";
import { getImageUrl } from "@/lib/image-url";
import Link from "next/link";

export default function Templates() {
  const { data, isLoading, error } = useTemplates();

  // 호버 효과 매핑 (기존 스타일 유지)
  const getHoverEffect = (index: number) => {
    const effects = ["scale-110", "rotate-6", "-rotate-12", "scale-110"];
    return effects[index % effects.length];
  };

  // 배지 색상 매핑
  const getBadgeColor = (badge: string[]) => {
    if (badge.includes("'new'") || badge.includes("new")) {
      return "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
    if (badge.includes("'best'") || badge.includes("best")) {
      return "bg-black text-white";
    }
    return "bg-black text-white";
  };

  if (isLoading) {
    return (
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="templates">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
              Choose Your Style
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-4">
              DESIGN <span className="font-light">Templates</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light">
              로딩 중...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="templates">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
              Choose Your Style
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-4">
              DESIGN <span className="font-light">Templates</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light">
              템플릿을 불러오는 중 오류가 발생했습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // API_SPEC: data.data.templates 형식으로 응답
  const templates = data?.data?.templates || [];

  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background-dark" id="templates">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2 block">
            Choose Your Style
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-4">
            DESIGN <span className="font-light">Templates</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">
            가장 빠르고 아름답게 시작하는 방법. 취향에 맞는 템플릿을 선택하세요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => {
            const hoverEffect = getHoverEffect(index);
            const badge = template.badge || [];
            const badgeColor = getBadgeColor(badge);
            const badgeText = badge[0]?.replace(/'/g, "").toUpperCase() || "";

            return (
              <Link
                key={template.id}
                href={template.projectUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-square rounded-2xl bg-white dark:bg-card-dark flex items-center justify-center mb-6 shadow-sm group-hover:shadow-lg transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-800">
                  {badge.length > 0 && (
                    <div
                      className={`absolute top-4 left-4 ${badgeColor} text-[10px] font-bold px-2 py-1 rounded-full z-10`}
                    >
                      {badgeText}
                    </div>
                  )}
                  <img
                    alt={template.title}
                    className={`w-1/2 h-1/2 object-contain drop-shadow-md transform group-hover:${hoverEffect} transition-transform duration-500`}
                    src={getImageUrl(template.imgUrl || "")}
                  />
                </div>
                <div className="text-left px-2">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors">
                    {template.title}
                  </h3>
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

