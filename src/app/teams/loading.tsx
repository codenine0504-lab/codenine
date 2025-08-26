import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-full mt-4 mx-auto" />
      </div>

      <div className="flex justify-center gap-2 mb-12">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col items-center text-center">
              <Skeleton className="h-32 w-32 rounded-full" />
              <Skeleton className="h-6 w-40 mt-6" />
              <Skeleton className="h-4 w-32 mt-2" />
              <div className="space-y-2 mt-4 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
