"use client";
import { useQuery } from "@tanstack/react-query";
import { getLowStockProductsQueryOptions } from "@/api/QueryOptions";

export const useGetLowStockProduct = () => {
  return useQuery(getLowStockProductsQueryOptions);
};
