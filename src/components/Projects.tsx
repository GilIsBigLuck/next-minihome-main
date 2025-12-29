"use client";

import { useProjects } from "@/hooks/queries/useProjects";
import { getImageUrl } from "@/lib/image-url";

export default function Projects() {
  const { data, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <section className="py-24 px-6 bg-white dark:bg-[#141414]" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-500">로딩 중...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 bg-white dark:bg-[#141414]" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-500">프로젝트를 불러오는 중 오류가 발생했습니다.</div>
        </div>
      </section>
    );
  }

  const projects = data?.projects || [];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#141414]" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-2 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Personalized Websites
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md text-right md:text-left">
            다양한 라이프스타일과 취향을 반영한 웹사이트 작업물입니다.<br />
            각기 다른 개성을 담은 미니홈의 포트폴리오를 확인해보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer block ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute top-0 w-full h-6 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center gap-1.5 px-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                  src={getImageUrl(project.imgUrl)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="font-bold text-lg">
                  {project.title}{" "}
                  <span className="font-normal text-gray-400 text-sm ml-2">
                    / {project.category}
                  </span>
                </h3>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                  arrow_outward
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

