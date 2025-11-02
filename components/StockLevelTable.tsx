import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRecentProducts } from "@/lib/actions/products";
const StockLevelTable = async () => {
  const recent = await getRecentProducts();
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <Table>
        <TableCaption>Stock Levels</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recent.map((product, index) => (
            <TableRow key={index} className="h-12">
              <TableCell className=" w-full">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${cn(
                      product.quantity <= (product.lowStockAt || 5)
                        ? product.quantity === 0
                          ? "bg-red-800"
                          : "bg-yellow-800"
                        : "bg-green-800"
                    )}`}
                  ></span>
                  <span className="text-sm">{product.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-md font-bold">
                <span className="text-sm">{product.quantity}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockLevelTable;
