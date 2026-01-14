import { Skeleton } from "@/components/ui/Skeleton";

export function TemplatesSkeleton() {
  return (
    <section
      className="py-24 px-6 bg-background-light dark:bg-background-dark"
      id="templates"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-20 space-y-4">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-12 w-80 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="w-full aspect-square rounded-2xl mb-6" />
              <div className="px-2 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
