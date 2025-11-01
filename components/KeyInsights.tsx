"use client";
import {
  getAllProductsQueryOptions,
  getLowStockProductsQueryOptions,
} from "@/api/QueryOptions";
import { useGetAllProducts } from "@/hooks/useGetAllProducts";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp } from "lucide-react";
import { useGetLowStockProduct } from "@/hooks/useGetLowStockProduct";
import { Skeleton } from "./ui/skeleton";

const KeyInsights = () => {
  const { data: totalProducts } = useGetAllProducts();
  const { data: lowStock } = useGetLowStockProduct();
  if (!totalProducts || !lowStock) {
    return (
      <div>
        <Skeleton className="h-full"></Skeleton>
      </div>
    );
  }

  

  const totalProductsCount = totalProducts?.length ?? 0;
  const lowStockCount = lowStock?.length ?? 0;
  const totalValue =
    totalProducts?.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0) ?? 0;
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold mb-6">Key Metrics</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="text-center">
          <div className="text-3xl font-bold">
            {totalProductsCount ?? "N/A"}
          </div>
          <div className="text-sm">Total Products</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              +{totalProductsCount}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">
            ${totalValue.toFixed(0) ?? "N/A"}
          </div>
          <div className="text-sm">Total Value</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              + ${totalValue.toFixed(0)}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{lowStockCount ?? "N/A"}</div>
          <div className="text-sm">Low Stock</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              {lowStockCount >= 0 ? `+${lowStockCount}` : `${lowStockCount}`}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInsights;
