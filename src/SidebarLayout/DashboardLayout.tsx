import KpiCard from "./KpiCard";
import BarChart from "./BarChart";
import DataTable from "./DataTable";
import DonutChart from "./DonutChart";
import DealsBar from "./DealsBar";
import ScatterChart from "./ScatterChart";
import GaugeChart from "./GaugeChart";

export default function DashboardLayout() {
  return (
    <div className="flex bg-gray-900 min-h-screen">
      <div className="flex-grow p-4 md:p-6">
        <div className="">
          <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>
          {/* ====== KPI SECTION ====== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* KPI 1 */}
            <KpiCard
              title="Avg Contract Value"
              value="1890"
              subtitle="/ 90"
              gradient="bg-gradient-to-br from-teal-600 to-teal-700"
            >
              <svg viewBox="0 0 100 20" className="w-full h-8 opacity-90">
                <polyline
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  points="0,12 15,6 30,9 45,4 60,7 75,6 90,8 100,5"
                />
              </svg>
            </KpiCard>

            {/* KPI 2 */}
            <KpiCard
              title="Lead Response Time"
              value="1090"
              subtitle="/ 90"
              gradient="bg-gradient-to-br from-cyan-600 to-cyan-700"
            >
              <svg viewBox="0 0 100 20" className="w-full h-8 opacity-90">
                <polyline
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  points="0,6 15,12 30,8 45,10 60,9 75,11 90,7 100,9"
                />
              </svg>
            </KpiCard>

            {/* KPI 3 */}
            <KpiCard
              title="Sales Cycle Length"
              value="11.46k"
              subtitle="▲ 11364"
              gradient="bg-gradient-to-br from-orange-400 to-orange-500"
            >
              <svg viewBox="0 0 100 20" className="w-full h-8 opacity-90">
                <polyline
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  points="0,6 20,8 40,6 60,10 80,7 100,8"
                />
              </svg>
            </KpiCard>

            {/* KPI 4 — SALES KPI GAUGE */}
            <KpiCard
              title="Sales KPI"
              value="263"
              gradient="bg-gradient-to-br from-orange-600 to-orange-500 flex justify-center items-center"
            >
              <GaugeChart value={263} />
            </KpiCard>
          </div>

          {/* ====== MIDDLE GRID ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* BAR CHART */}
            <div className="lg:col-span-2 bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Avg Interaction Value
              </h3>

              <BarChart
                data={[
                  { label: "Middle East", value: 255 },
                  { label: "North America", value: 237 },
                  { label: "Asia", value: 154 },
                  { label: "Africa", value: 205 },
                  { label: "Europe", value: 171 },
                  { label: "C. America", value: 154 },
                  { label: "Australia", value: 90 },
                ]}
              />
            </div>

            {/* TABLE */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Top 5 Channels
              </h3>

              <DataTable
                headers={["Order Date", "Country", "Units Sold"]}
                rows={[
                  ["10/18/2014", "Australia", "8446"],
                  ["11/17/2011", "Canada", "3018"],
                  ["10/31/2016", "Japan", "1517"],
                  ["04/10/2011", "India", "3322"],
                  ["12/05/2016", "USA", "9845"],
                ]}
              />
            </div>
          </div>

          {/* ====== BOTTOM GRID ====== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* DONUT CHART */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-sm font-medium text-gray-700">Item Type</h4>

              <div className="flex justify-center py-4">
                <DonutChart
                  segments={[
                    { name: "Yamaha_Dirt", value: 25.2, color: "#10B981" },
                    { name: "Yamaha_Adv", value: 20.1, color: "#F97316" },
                    { name: "R15-v3", value: 30.2, color: "#6366F1" },
                    { name: "MT-15", value: 25.5, color: "#3D2C2E" },
                  ]}
                />
              </div>
            </div>

            {/* SCATTER CHART */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-sm font-medium text-gray-700">
                Sales Activity
              </h4>

              <ScatterChart
                categories={[
                  "Yamaha_Dirt",
                  "Yamaha_Adv",
                  "R15-v3",
                  "MT-15",
                  "Scooty",
                ]}
                points={[
                  { x: 10, y: 0, radius: 6, color: "#f97316" },
                  { x: 20, y: 1, radius: 5, color: "#10B981" },
                  { x: 15, y: 2, radius: 6, color: "#10B981" },
                  { x: 25, y: 3, radius: 7, color: "#f97316" },
                  { x: 10, y: 4, radius: 5, color: "#f97316" },
                ]}
              />
            </div>

            {/* TOP DEALS */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Top Deals
              </h4>

              <DealsBar label="3.5M" value={90} />
              <DealsBar label="2.0M" value={55} />
              <DealsBar label="0.5M" value={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
