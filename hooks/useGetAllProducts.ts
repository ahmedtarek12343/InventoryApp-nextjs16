"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQueryOptions } from "@/api/QueryOptions";

export const useGetAllProducts = () => {
  return useQuery(getAllProductsQueryOptions);
};
