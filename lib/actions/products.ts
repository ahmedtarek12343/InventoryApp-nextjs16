"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import z from "zod";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be non-negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be non-negative"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

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

export async function deleteProductById(productId: string) {
  try {
    const user = await getCurrentUser();
    const deleted = await prisma.product.delete({
      where: {
        id: productId,
        userId: user.id,
      },
    });

    return {
      success: true,
      message: `${deleted.name} deleted successfully`,
    };
  } catch (error) {
    console.error("Failed to delete product:", error);
    return {
      success: false,
      message: "Failed to delete product",
    };
  }
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();
  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });
  } catch (error) {
    throw new Error("Failed to create product.");
  }
}

export async function updateProduct(formData: FormData, productId: string) {
  const user = await getCurrentUser();
  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });
  if (!parsed.success) {
    throw new Error("Validation failed");
  }
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { ...parsed.data, userId: user.id },
    });
  } catch (error) {
    throw new Error("Failed to create product.");
  }
}
