interface StockDistribution {
  inStockPercentage: number;
  lowStockPercentage: number;
  outOfStockPercentage: number;
}

export default function InfoChart({
  distribution,
}: {
  distribution: StockDistribution;
}) {
  const { inStockPercentage, lowStockPercentage, outOfStockPercentage } =
    distribution;

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Stock Efficiency</h2>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="relative w-48 h-48 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(
              #22c55e 0deg ${inStockPercentage * 3.6}deg,
              #eab308 ${inStockPercentage * 3.6}deg ${
              (inStockPercentage + lowStockPercentage) * 3.6
            }deg,
              #ef4444 ${
                (inStockPercentage + lowStockPercentage) * 3.6
              }deg 360deg
            )`,
          }}
        >
          <div className="absolute inset-0 rounded-full m-3 bg-background" />
          <div className="text-center z-10">
            <div className="text-2xl font-bold">{inStockPercentage}%</div>
            <div className="text-sm text-muted-foreground">In Stock</div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-muted-foreground">In Stock</span>
          </div>
          <span className="font-bold">{inStockPercentage}%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-muted-foreground">Low Stock</span>
          </div>
          <span className="font-bold">{lowStockPercentage}%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-muted-foreground">Out of Stock</span>
          </div>
          <span className="font-bold">{outOfStockPercentage}%</span>
        </div>
      </div>
    </div>
  );
}
