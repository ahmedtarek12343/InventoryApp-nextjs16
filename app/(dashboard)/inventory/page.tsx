import { getAllProducts } from "@/lib/actions/products";
import { InvTable } from "@/components/InvTable";

const InventoryPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="">
      <main className="p-4">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-semibold mb-1">Inventory</h1>
              <p className="text-sm">
                Manage your products and track inventory levels.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <InvTable products={products} />
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
