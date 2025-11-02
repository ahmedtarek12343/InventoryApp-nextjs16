import { getAllProducts } from "@/lib/actions/products";
const InfoChart = async () => {
  const allProducts = await getAllProducts();
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
    allProducts.length > 0
      ? Math.round((inStockCount / allProducts.length) * 100)
      : 0;
  const lowStockPercentage =
    allProducts.length > 0
      ? Math.round((lowStockCount / allProducts.length) * 100)
      : 0;
  const outOfStockPercentage =
    allProducts.length > 0
      ? Math.round((outOfStockCount / allProducts.length) * 100)
      : 0;
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Efficiency</h2>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="relative w-48 h-48 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#eee ${
              inStockPercentage * 3.6
            }deg, #222 0deg)`,
          }}
        >
          <div className="absolute inset-0 rounded-full m-8"></div>{" "}
          {/* inner circle */}
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-800"></div>
            <span>
              In Stock <span className="font-bold">({inStockPercentage})</span>%
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
  );
};

export default InfoChart;
