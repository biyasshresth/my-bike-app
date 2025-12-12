import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

interface GaugeChartProps {
  value: number;
}

export default function GaugeChart({ value }: GaugeChartProps) {
  const max = 400;
  const percent = (value / max) * 100;

  const ticks = [0, 100, 200, 300, 400];

  // chart sizing
  const width = 240;
  const height = 160;
  const cx = width / 2; // 120
  const cy = height / 1.15; // 139
  const radius = 95;

  const valueToAngle = (val: number) => 180 - (val / max) * 180;

  return (
    <div
      className="relative "
      // style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="relative w-[240px] h-[160px]">
        <RadialBarChart
          width={width}
          height={height}
          cx={cx}
          cy={cy}
          innerRadius={70}
          outerRadius={90}
          startAngle={180}
          endAngle={0}
          data={[{ value: percent }]}
        >
          <RadialBar
            dataKey="value"
            fill="#F24236"
            background={{ fill: "#fde68a" }}
            cornerRadius={10}
          />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        </RadialBarChart>

        {/* Ticks */}
        <svg
          width={width}
          height={height}
          className="absolute inset-0 pointer-events-none"
        >
          {ticks.map((t, index) => {
            const angle = (valueToAngle(t) * Math.PI) / 180;
            const x = cx + radius * Math.cos(angle);
            const y = cy - radius * Math.sin(angle);

            return (
              <text
                key={index}
                x={x}
                y={y}
                className="fill-white text-[10px]"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {t}
              </text>
            );
          })}
        </svg>

        {/* Center value — TAILWIND ONLY */}
        <div
          className="
            absolute
            left-1/2
            top-[104px]       /* Converted from cy - 35 → 139 - 35 = 104 */
            -translate-x-1/2
            text-white
            font-semibold
            text-[38px]
          "
        >
          {value}
        </div>
      </div>
    </div>
  );
}
