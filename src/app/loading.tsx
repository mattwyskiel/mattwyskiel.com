import { Skeleton } from "@whiskey/web-ui/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-muted">
      <main className="container mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-5 w-96 max-w-full" />
        </div>
        <div className="flex flex-col gap-6">
          {[0, 1, 2].map((index) => (
            <article className="flex flex-col gap-4 border-b pb-8" key={index}>
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-36" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="h-6 w-44" />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
