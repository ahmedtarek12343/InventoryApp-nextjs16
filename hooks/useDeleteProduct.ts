"use client";
import { useMutation } from "@tanstack/react-query";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export const useDeleteProduct = async () => {
  const user = await getCurrentUser();
  const userId = user.id;
  return useMutation({
    mutationFn: async (productId: string) => {
      await prisma.product.delete({
        where: { userId, id: productId },
      });
    },
  });
};
