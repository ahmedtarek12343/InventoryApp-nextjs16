"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteProductById } from "@/lib/actions/products";
import { toast } from "sonner";
import { useTransition, Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface ConfirmDeleteProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  productId: string;
  productName: string;
}

const ConfirmDelete = ({
  open,
  onOpenChange,
  productId,
  productName,
}: ConfirmDeleteProps) => {
  const [isPending, startTransition] = useTransition();

  const confirmDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteProductById(productId);

        if (result.success) {
          toast.success(result.message || "Product deleted successfully");
          onOpenChange(false); // Close dialog after success
        } else {
          toast.error(result.message || "Failed to delete product");
        }
      } catch (error) {
        toast.error("Failed to delete product");
        console.error("Delete error:", error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>"{productName}"</strong>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={confirmDelete}
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDelete;
