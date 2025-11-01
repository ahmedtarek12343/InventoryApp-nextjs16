import { InvTable } from "@/components/InvTable";

const InventoryPage = async () => {
  return (
    <div className="min-h-screen">
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
          <InvTable />
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
