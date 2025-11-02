// app/(dashboard)/dashboard/page.tsx
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProductsChart from "@/components/ProductsChart";
import KeyInsights from "@/components/KeyInsights";
import StockLevelTable from "@/components/StockLevelTable";
import InfoChart from "@/components/InfoChart";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function calculateWeeklyData(products: any[]) {
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

    const weekProducts = products.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      week: weekLabel,
      products: weekProducts.length,
    });
  }

  return weeklyProductsData;
}

async function getDashboardData(userId: string) {
  const allProducts = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  const serializedProducts = allProducts.map((product) => ({
    id: product.id,
    name: product.name,
    price: parseFloat(product.price.toString()),
    quantity: product.quantity,
    lowStockAt: product.lowStockAt,
    createdAt: product.createdAt.toISOString(),
  }));

  const totalProductsCount = serializedProducts.length;
  const totalValue = serializedProducts.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const lowStockProducts = serializedProducts.filter(
    (product) => product.lowStockAt && product.quantity <= product.lowStockAt
  );
  const lowStockCount = lowStockProducts.length;

  const inStockCount = serializedProducts.filter(
    (product) => product.quantity > (product.lowStockAt || 5)
  ).length;

  const outOfStockCount = serializedProducts.filter(
    (product) => product.quantity === 0
  ).length;

  const inStockPercentage =
    totalProductsCount > 0
      ? Math.round((inStockCount / totalProductsCount) * 100)
      : 0;
  const lowStockPercentage =
    totalProductsCount > 0
      ? Math.round((lowStockCount / totalProductsCount) * 100)
      : 0;
  const outOfStockPercentage =
    totalProductsCount > 0
      ? Math.round((outOfStockCount / totalProductsCount) * 100)
      : 0;

  const recentProducts = serializedProducts.slice(0, 5);
  const weeklyData = calculateWeeklyData(serializedProducts);

  return {
    keyMetrics: {
      totalProductsCount,
      totalValue,
      lowStockCount,
    },
    stockDistribution: {
      inStockPercentage,
      lowStockPercentage,
      outOfStockPercentage,
    },
    recentProducts,
    weeklyData,
  };
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-80 rounded-lg" />
        <Skeleton className="h-80 rounded-lg" />
      </div>
    </div>
  );
}

export default async function DashboardPage() {
  const user = await getCurrentUser();

  const dashboardData = await getDashboardData(user.id);

  return (
    <div className="">
      <main className="p-4">
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back! Here is an overview of your inventory
              </p>
            </div>
          </div>
        </div>

        <Suspense fallback={<DashboardSkeleton />}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <KeyInsights metrics={dashboardData.keyMetrics} />

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">New Products Per Week</h2>
              </div>
              <div className="h-48">
                <ProductsChart data={dashboardData.weeklyData} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <StockLevelTable products={dashboardData.recentProducts} />
            <InfoChart distribution={dashboardData.stockDistribution} />
          </div>
        </Suspense>
      </main>
    </div>
  );
}
