"use client";
import { useGetAllProducts } from "@/hooks/useGetAllProducts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const InvTable = () => {
  const { data: allProducts, isLoading, isError } = useGetAllProducts();

  if (isLoading) return <Loader2 className="animate-spin" size={20} />;
  if (isError) return <div>Error loading products</div>;

  if (!allProducts) return <div>No products found</div>;

  return (
    <Table>
      <TableHeader className="bg-card">
        <TableRow>
          <TableHead className="px-2 py-3 text-left text-xs font-medium uppercase">
            Name
          </TableHead>
          <TableHead className="px-2 py-3 text-left text-xs font-medium uppercase">
            SKU
          </TableHead>
          <TableHead className="px-2 py-3 text-left text-xs font-medium uppercase">
            Price
          </TableHead>
          <TableHead className="px-2 py-3 text-left text-xs font-medium uppercase">
            Low Stock At
          </TableHead>
          <TableHead className="pr-10 py-3 text-right text-xs font-medium uppercase">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allProducts.map((product, i) => (
          <TableRow key={i}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.sku ?? "-"}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell>{product.lowStockAt}</TableCell>
            <TableCell className="text-right pr-5">
              <Button variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
