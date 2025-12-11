interface DealsBarProps {
  label: string;
  value: number; // 0–100
}

export default function DealsBar({ label, value }: DealsBarProps) {
  // Build width class dynamically: w-[55%]
  const widthClass = `w-[${value}%]`;

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">{value}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-orange-500 rounded-full transition-all duration-500 ${widthClass}`}
        />
      </div>
    </div>
  );
}
