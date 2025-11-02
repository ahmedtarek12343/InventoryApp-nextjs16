"use client";
import { Skeleton } from "@/components/ui/skeleton";

export const InventoryLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 p-4 mb-10">
        <Skeleton className="h-4 w-20"></Skeleton>
        <Skeleton className="h-4 w-60"></Skeleton>
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="h-8 w-[20%]"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
      </div>
    </div>
  );
};

export default InventoryLoading;
