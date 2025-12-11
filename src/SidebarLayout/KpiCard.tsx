import React from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  gradient: string;
  children?: React.ReactNode;
}

export default function KpiCard({
  title,
  value,
  subtitle,
  gradient,
  children,
}: KpiCardProps) {
  return (
    <div
      className={`rounded-lg shadow p-4 text-white flex flex-col justify-between ${gradient}`}
    >
      <div className="text-sm opacity-90">{title}</div>

      <div className="mt-2">
        <div className="text-3xl font-bold">{value}</div>
        {subtitle && (
          <div className="text-xs opacity-80 leading-none">{subtitle}</div>
        )}
      </div>

      <div className="mt-2">{children}</div>
    </div>
  );
}
