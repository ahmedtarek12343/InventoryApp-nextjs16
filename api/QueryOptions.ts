import { queryOptions } from "@tanstack/react-query";
import { getAllProducts } from "@/app/actions/products";
import { getLowStockProducts } from "@/app/actions/products";
import { getRecentProducts } from "@/app/actions/products";

export const getAllProductsQueryOptions = queryOptions({
  queryKey: ["products"],
  queryFn: async () => {
    return await getAllProducts();
  },
});

export const getLowStockProductsQueryOptions = queryOptions({
  queryKey: ["lowStockProducts"],
  queryFn: async () => {
    return await getLowStockProducts();
  },
});

export const getRecentProductsQueryOptions = queryOptions({
  queryKey: ["recentProducts"],
  queryFn: async () => {
    return await getRecentProducts();
  },
});
