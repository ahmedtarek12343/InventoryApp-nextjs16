import { useMutation } from "@tanstack/react-query";
import { deleteProductById } from "@/lib/actions/products";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
export const useDeleteProductById = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: deleteProductById,
    onSuccess: () => {
      toast.success("Product Deleted Successfully!");
      queryclient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => {
      toast.error(`failed to delete product ${err.message}`);
    },
  });
};
