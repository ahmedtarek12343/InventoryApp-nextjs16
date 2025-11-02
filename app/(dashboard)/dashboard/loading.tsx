"use client";
import { Skeleton } from "@/components/ui/skeleton";

export const dashboardLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 p-4 mb-10">
        <Skeleton className="h-4 w-20"></Skeleton>
        <Skeleton className="h-4 w-60"></Skeleton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <Skeleton className="h-64 w-full"></Skeleton>
        <Skeleton className="h-64 w-full"></Skeleton>
        <Skeleton className="h-96 w-full"></Skeleton>
        <Skeleton className="h-96 w-full"></Skeleton>
      </div>
    </div>
  );
};

export default dashboardLoading;
