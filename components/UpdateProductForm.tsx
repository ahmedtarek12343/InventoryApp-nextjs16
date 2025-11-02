import { useTransition, Dispatch, SetStateAction, FormEvent } from "react";
import { updateProduct } from "@/lib/actions/products";
import { toast } from "sonner";
import { Button } from "./ui/button";
import Link from "next/link";
import type { Product } from "@/types/types";
interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  product: Product;
}

const UpdateProductForm = ({ open, onOpenChange, product }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        await updateProduct(formData, product.id);
        toast.success("Product updated!");
        onOpenChange(false);
        return;
      } catch (err) {
        toast.error("Failed to update product");
      }
    });
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Product Name *
        </label>
        <input
          type="text"
          defaultValue={product.name}
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:border-transparent"
          placeholder="Enter Product Name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium  mb-2">
            Quantity *
          </label>
          <input
            type="number"
            defaultValue={product.quantity}
            id="quantity"
            name="quantity"
            min="0"
            required
            className="w-full px-4 py-2 border  rounded-lg focus:border-transparent"
            placeholder="0"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium  mb-2">
            Price *
          </label>
          <input
            type="number"
            defaultValue={product.price}
            id="price"
            name="price"
            step="0.01"
            min="0"
            required
            className="w-full px-4 py-2 border  rounded-lg focus:border-transparent"
            placeholder="0.0"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sku" className="block text-sm font-medium  mb-2">
          SKU (optional)
        </label>
        <input
          type="text"
          id="sku"
          defaultValue={product.sku || ""}
          name="sku"
          className="w-full px-4 py-2 border  rounded-lg focus:border-transparent"
          placeholder="Enter SKU"
        />
      </div>

      <div>
        <label htmlFor="lowStockAt" className="block text-sm font-medium  mb-2">
          Low Stock At (optional)
        </label>
        <input
          type="number"
          defaultValue={product.lowStockAt || ""}
          id="lowStockAt"
          name="lowStockAt"
          min="0"
          className="w-full px-4 py-2 border  rounded-lg focus:border-transparent"
          placeholder="Enter low stock threshold"
        />
      </div>

      <div className="flex gap-5 items-center">
        <Button type="submit" className="cursor-pointer">
          {isPending ? "Updating..." : "Update Product"}
        </Button>
        <Button
          onClick={() => {
            onOpenChange(false);
          }}
          variant={"outline"}
          asChild
        >
          <Link href="/inventory" className="px-6 py-3 rounded-lg">
            Cancel
          </Link>
        </Button>
      </div>
    </form>
  );
};

export default UpdateProductForm;
