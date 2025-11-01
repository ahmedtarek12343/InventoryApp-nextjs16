import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProductsChart from "@/components/ProductsChart";
import KeyInsights from "@/components/KeyInsights";
import StockLevelTable from "@/components/StockLevelTable";
export const DashboardPage = async () => {
  const user = await getCurrentUser();
  const userId = user.id;

  const [totalProducts, lowStock, allProducts] = await Promise.all([
    prisma.product.count({
      where: { userId: userId },
    }),
    prisma.product.count({
      where: { userId, lowStockAt: { not: null }, quantity: { lte: 5 } },
    }),
    prisma.product.findMany({
      where: { userId },
      select: {
        price: true,
        quantity: true,
        createdAt: true,
        lowStockAt: true,
      },
    }),
  ]);

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

  const inStockCount = allProducts.filter(
    (product) => product.quantity > (product.lowStockAt || 5)
  ).length;
  const lowStockCount = allProducts.filter(
    (product) =>
      product.quantity <= (product.lowStockAt || 5) && product.quantity > 0
  ).length;
  const outOfStockCount = allProducts.filter(
    (product) => product.quantity === 0
  ).length;
  const inStockPercentage =
    totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
  const lowStockPercentage =
    totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
  const outOfStockPercentage =
    totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

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
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Efficiency</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                <div
                  className="absolute inset-0 rounded-full border-8 border-chart-1"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {inStockPercentage}%
                    </div>
                    <div className="text-sm">In Stock</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-800"></div>
                  <span>
                    In Stock{" "}
                    <span className="font-bold">({inStockPercentage})</span>%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-800"></div>
                  <span>
                    Low Stock{" "}
                    <span className="font-bold">({lowStockPercentage})</span>%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span>
                    Out of Stock{" "}
                    <span className="font-bold">({outOfStockPercentage})</span>%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
