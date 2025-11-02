import { TrendingUp } from "lucide-react";

interface KeyMetrics {
  totalProductsCount: number;
  totalValue: number;
  lowStockCount: number;
}

export default function KeyInsights({ metrics }: { metrics: KeyMetrics }) {
  const { totalProductsCount, totalValue, lowStockCount } = metrics;

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold mb-6">Key Metrics</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="text-center">
          <div className="text-3xl font-bold">{totalProductsCount}</div>
          <div className="text-sm text-muted-foreground">Total Products</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              +{totalProductsCount}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">${totalValue.toFixed(0)}</div>
          <div className="text-sm text-muted-foreground">Total Value</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              +${totalValue.toFixed(0)}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{lowStockCount}</div>
          <div className="text-sm text-muted-foreground">Low Stock</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-xs text-green-800">
              {lowStockCount >= 0 ? `+${lowStockCount}` : `${lowStockCount}`}
            </span>
            <TrendingUp className="w-3 h-3 text-green-800 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
