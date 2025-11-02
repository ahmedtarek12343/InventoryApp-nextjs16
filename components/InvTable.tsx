"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import ConfirmDelete from "./ConfirmDelete";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import UpdateForm from "./UpdateForm";
import type { Product } from "@/types/types";
export const InvTable = ({ products }: { products: Product[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [index, setIndex] = useState(1);

  const productsPerPage = 10;
  const endIdx = index * productsPerPage;
  const startIdx = endIdx - productsPerPage;
  const totalPages = Math.ceil(products.length / productsPerPage);
  console.log(totalPages);

  let filteredProducts = products.filter((product) => {
    return product.name.includes(searchQuery);
  });

  filteredProducts = filteredProducts.slice(startIdx, endIdx);

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by name or SKU..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[70%] md:max-w-lg"
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-card">
            <TableRow>
              <TableHead className="px-4 py-3 text-xs font-medium uppercase">
                Name
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium uppercase">
                SKU
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium uppercase">
                Price
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium uppercase">
                Quantity
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium uppercase">
                Low Stock At
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-xs font-medium uppercase">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  {searchQuery ? (
                    <p className="text-muted-foreground">
                      No products found matching "{searchQuery}"
                    </p>
                  ) : (
                    <p className="text-muted-foreground">
                      No products available
                    </p>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {product.sku || "—"}
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={
                        product.quantity === 0
                          ? "text-destructive font-semibold"
                          : product.quantity <= (product.lowStockAt || 5)
                          ? "text-yellow-600 font-semibold"
                          : ""
                      }
                    >
                      {product.quantity}
                    </span>
                  </TableCell>
                  <TableCell>{product.lowStockAt || "—"}</TableCell>
                  <TableCell className="text-right flex gap-3 justify-end">
                    <Button
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenEditDialog(true);
                        setSelectedProduct(product);
                      }}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenDeleteDialog(true);
                        setSelectedProduct(product);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center">
        <Pagination className="justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  setIndex((prev) => prev - 1);
                }}
                className={
                  index === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                aria-disabled={index === 1}
              />
            </PaginationItem>
            <div className="flex gap-2 ">
              {Array.from({ length: totalPages }).map((_, idx) => {
                return (
                  <PaginationItem key={idx + 1}>
                    <PaginationLink
                      onClick={() => setIndex(idx + 1)}
                      isActive={index === idx + 1}
                    >
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
            </div>
            <PaginationItem>
              <PaginationNext
                className={
                  index !== totalPages
                    ? "cursor-pointer"
                    : "pointer-events-none opacity-50"
                }
                aria-disabled={index !== totalPages}
                onClick={() => setIndex((prev) => prev + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {selectedProduct && (
        <ConfirmDelete
          open={openDeleteDialog}
          onOpenChange={setOpenDeleteDialog}
          productId={selectedProduct.id}
          productName={selectedProduct.name}
        />
      )}
      {selectedProduct && (
        <UpdateForm
          open={openEditDialog}
          onOpenChange={setOpenEditDialog}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
