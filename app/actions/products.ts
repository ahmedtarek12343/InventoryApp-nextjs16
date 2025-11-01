"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getAllProducts() {
  const user = await getCurrentUser();
  const userId = user.id;
  const products = await prisma.product.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Convert Decimal to number and serialize dates for client components
  return products.map((product) => ({
    ...product,
    price: parseFloat(product.price.toString()),
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));
}

export async function getLowStockProducts() {
  const user = await getCurrentUser();
  const userId = user.id;
  const products = await prisma.product.findMany({
    where: {
      userId,
      lowStockAt: { not: null },
    },
  });

  // Filter products where quantity <= lowStockAt
  const lowStockProducts = products.filter(
    (product) => product.lowStockAt && product.quantity <= product.lowStockAt
  );

  // Convert Decimal to number and serialize dates for client components
  return lowStockProducts.map((product) => ({
    ...product,
    price: parseFloat(product.price.toString()),
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));
}

export async function getRecentProducts() {
  const user = await getCurrentUser();
  const userId = user.id;
  const recent = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return recent.map((product) => ({
    ...product,
    price: parseFloat(product.price.toString()),
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));
}
