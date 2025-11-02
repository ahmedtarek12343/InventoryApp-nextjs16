import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProductsChart from "@/components/ProductsChart";
import KeyInsights from "@/components/KeyInsights";
import StockLevelTable from "@/components/StockLevelTable";
import InfoChart from "@/components/InfoChart";
export const DashboardPage = async () => {
  const user = await getCurrentUser();
  const userId = user.id;
  const allProducts = await prisma.product.findMany({
    where: { userId },
    select: {
      price: true,
      quantity: true,
      createdAt: true,
      lowStockAt: true,
    },
  });
  const now = new Date();
  const weeklyProductsData = [];
  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - i * 7);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(weekStart.getDate()).padStart(2, "0")}`;

    const weekProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      week: weekLabel,
      products: weekProducts.length,
    });
  }

  return (
    <div className="">
      <main className="p-4">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-sm">
                welcome back! here is an overview of your inventory
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <KeyInsights />
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2>New products per week</h2>
            </div>
            <div className="h-48">
              <ProductsChart data={weeklyProductsData} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <StockLevelTable />
          <InfoChart />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
