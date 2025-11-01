"use client";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
interface ChartData {
  week: string;
  products: number;
}
const ProductsChart = ({ data }: { data: ChartData[] }) => {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="week"
            stroke="var(--primary)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey="products"
            stroke="var(--primary)"
            tickLine={false}
            fontSize={12}
            axisLine={false}
            allowDecimals={false}
          />
          <Area
            type="monotone"
            dataKey="products"
            stroke="var(--primary)"
            fill="white"
            fillOpacity="0.4"
            dot
            activeDot={{ r: 5 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #111",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.8)",
            }}
            labelStyle={{ color: "#000", fontWeight: "300" }}
            itemStyle={{ color: "#000" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductsChart;
