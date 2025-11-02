"use client";
import { Skeleton } from "@/components/ui/skeleton";

export const AddProductLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 p-4 mb-10">
        <Skeleton className="h-4 w-20"></Skeleton>
        <Skeleton className="h-4 w-60"></Skeleton>
      </div>
      <Skeleton className="w-50 h-64"></Skeleton>
    </div>
  );
};

export default AddProductLoading;
