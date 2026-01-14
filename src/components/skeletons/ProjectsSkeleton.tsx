import { Skeleton } from "@/components/ui/Skeleton";

export function ProjectsSkeleton() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#141414]" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="flex flex-col tablet:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton variant="title" className="w-64" />
          </div>
          <div className="space-y-2 text-right">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={index % 2 === 1 ? "tablet:mt-16" : ""}
            >
              <Skeleton variant="image" className="rounded-lg" />
              <div className="mt-4 flex justify-between items-center">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
