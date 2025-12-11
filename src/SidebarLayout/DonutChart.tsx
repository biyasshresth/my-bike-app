import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type DonutSegment = {
  name: string;
  value: number;
  color: string;
};

interface DonutChartProps {
  segments: DonutSegment[];
}

export default function DonutChart({ segments }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={segments}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
        >
          {segments.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>

        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ fontSize: 12 }}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
