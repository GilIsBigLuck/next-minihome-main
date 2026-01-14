import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main>
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 w-full z-header bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </nav>

      {/* Header Skeleton */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton variant="title" className="w-96 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-24 px-6 bg-white dark:bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton variant="image" className="rounded-lg" />
                <Skeleton className="h-6 w-48" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
