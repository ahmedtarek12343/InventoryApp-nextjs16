"use client";

import { getRecentProductsQueryOptions } from "@/api/QueryOptions";
import { useQuery } from "@tanstack/react-query";

export const useGetRecentProducts = () => {
  return useQuery(getRecentProductsQueryOptions);
};
