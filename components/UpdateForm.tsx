"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import UpdateProductForm from "./UpdateProductForm";
import type { Product } from "@/types/types";
interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  product: Product;
}

const UpdateForm = ({ open, onOpenChange, product }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <UpdateProductForm
            open={open}
            onOpenChange={onOpenChange}
            product={product}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateForm;
