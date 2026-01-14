"use client";

import Image from "next/image";
import { cva } from "class-variance-authority";
import { useProjects } from "@/hooks/queries/useProjects";
import { getImageUrl } from "@/lib/image-url";
import { ProjectsSkeleton } from "@/components/skeletons/ProjectsSkeleton";

// =========================
// CVA Variants
// =========================

const sectionStyles = cva([
  "py-24 px-6",
  "bg-white dark:bg-[#141414]",
]);

const cardLinkStyles = cva(["group cursor-pointer block"], {
  variants: {
    offset: {
      true: "tablet:mt-16",
      false: "",
    },
  },
  defaultVariants: {
    offset: false,
  },
});

const cardContainerStyles = cva([
  "relative aspect-[16/10] overflow-hidden rounded-lg",
  "border border-gray-100 dark:border-gray-800",
  "shadow-sm transition-all duration-500",
  "group-hover:shadow-2xl group-hover:-translate-y-2",
]);

const browserBarStyles = cva([
  "absolute top-0 w-full h-6 z-10",
  "bg-gray-100 dark:bg-gray-800",
  "border-b border-gray-200 dark:border-gray-700",
  "flex items-center gap-1.5 px-3",
  "opacity-0 group-hover:opacity-100",
  "transition-opacity duration-300",
]);

const browserDotStyles = cva("w-2 h-2 rounded-full", {
  variants: {
    color: {
      red: "bg-red-400",
      yellow: "bg-yellow-400",
      green: "bg-green-400",
    },
  },
});

const cardOverlayStyles = cva([
  "absolute inset-0 z-[1]",
  "bg-black/0 group-hover:bg-black/10",
  "transition-colors duration-500",
]);

const cardInfoStyles = cva(["mt-4 flex justify-between items-center"]);

const arrowIconStyles = cva([
  "material-symbols-outlined",
  "text-gray-300",
  "group-hover:text-black dark:group-hover:text-white",
  "transition-colors",
]);

// =========================
// Component
// =========================

export default function Projects() {
  const { data, isLoading, error } = useProjects();

  if (isLoading) {
    return <ProjectsSkeleton />;
  }

  if (error) {
    return (
      <section className={sectionStyles()} id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-500">
            프로젝트를 불러오는 중 오류가 발생했습니다.
          </div>
        </div>
      </section>
    );
  }

  const projects = data?.data?.projects || [];

  return (
    <section className={sectionStyles()} id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col tablet:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2 block">
              Gallery
            </span>
            <h2 className="text-3xl tablet:text-4xl font-display font-bold">
              Personalized Websites
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md text-right tablet:text-left">
            다양한 라이프스타일과 취향을 반영한 웹사이트 작업물입니다.
            <br />
            각기 다른 개성을 담은 mini의 포트폴리오를 확인해보세요.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-12">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.projectUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={cardLinkStyles({ offset: index % 2 === 1 })}
            >
              {/* Card Container */}
              <div className={cardContainerStyles()}>
                {/* Browser Bar */}
                <div className={browserBarStyles()}>
                  <div className={browserDotStyles({ color: "red" })} />
                  <div className={browserDotStyles({ color: "yellow" })} />
                  <div className={browserDotStyles({ color: "green" })} />
                </div>

                {/* Image */}
                <Image
                  src={getImageUrl(project.imgUrl || "")}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className={cardOverlayStyles()} />
              </div>

              {/* Card Info */}
              <div className={cardInfoStyles()}>
                <h3 className="font-bold text-lg">
                  {project.title}{" "}
                  <span className="font-normal text-gray-400 text-sm ml-2">
                    / {project.category}
                  </span>
                </h3>
                <span className={arrowIconStyles()}>arrow_outward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
