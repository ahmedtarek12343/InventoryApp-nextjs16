import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: string;
  name: string;
  quantity: number;
  lowStockAt: number | null;
}

export default function StockLevelTable({ products }: { products: Product[] }) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Products</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center text-muted-foreground"
              >
                No products yet
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id} className="h-12">
                <TableCell className="w-full">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full",
                        product.quantity <= (product.lowStockAt || 5)
                          ? product.quantity === 0
                            ? "bg-red-500"
                            : "bg-yellow-500"
                          : "bg-green-500"
                      )}
                    />
                    <span className="text-sm">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      product.quantity === 0
                        ? "text-red-500"
                        : product.quantity <= (product.lowStockAt || 5)
                        ? "text-yellow-500"
                        : ""
                    )}
                  >
                    {product.quantity}
                  </span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
