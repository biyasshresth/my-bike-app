import {
  ScatterChart as ReScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/** --- Data types --- */
export type ScatterPoint = {
  x: number;
  y: number;  
  radius: number;
  color: string;
};

interface ScatterChartProps {
  points: ScatterPoint[];
  categories: string[];
}

type DotProps = {
  cx?: number | string;
  cy?: number | string;
  payload?: {
    x: number;
    y: number;
    radius: number;
    color: string;
    [k: string]: any;
  };
};


const CustomDot = ({ cx, cy, payload }: DotProps) => {
  if (cx == null || cy == null || !payload) return null;

  const r = Number(payload.radius) || 4;
  const fill = payload.color || "#000";

  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
};

/** --- Component --- */
export default function ScatterChart({
  points,
  categories,
}: ScatterChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <ReScatterChart margin={{ top: 10, right: 30, bottom: 10, left: 20 }}>
        <XAxis
          type="number"
          dataKey="x"
          name="Volume"
          tick={{ fontSize: 12 }}
          domain={[0, 30]}
        />

        <YAxis
          type="category"
          dataKey="y"
          ticks={categories.map((_, i) => i)}
          tickFormatter={(value) =>
            typeof value === "number" ? categories[value] ?? "" : ""
          }
          width={90}
          tick={{ fontSize: 12 }}
        />

        <Tooltip cursor={{ strokeDasharray: "3 3" }} />

        <Scatter
          data={points}
          shape={(props: any) => <CustomDot {...props} />}
        />
      </ReScatterChart>
    </ResponsiveContainer>
  );
}
