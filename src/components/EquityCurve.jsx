import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function EquityCurve({ data, startingBalance }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const labels = data.map((d) => d.label);
    const values = data.map((d) => d.value);
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.25)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.02)");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Account Balance",
            data: values,
            borderColor: "#3b82f6",
            backgroundColor: gradient,
            fill: true,
            tension: 0.3,
            pointBackgroundColor: values.map((v) =>
              v >= startingBalance ? "#22c55e" : "#ef4444",
            ),
            pointBorderColor: "#ffffff",
            pointBorderWidth: 1.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 2.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => "$" + ctx.parsed.y.toLocaleString(),
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => "$" + value.toLocaleString(),
              font: { size: 10 },
            },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
          x: {
            ticks: {
              font: { size: 9 },
              maxRotation: 20,
              autoSkip: true,
              maxTicksLimit: 8,
            },
            grid: { display: false },
          },
        },
        interaction: { intersect: false, mode: "index" },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, startingBalance]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200/70 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-700">
          📈 Equity Curve
        </h3>
        <span className="text-xs text-slate-400">
          Cumulative balance over trades
        </span>
      </div>
      <div className="relative h-48 w-full">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
