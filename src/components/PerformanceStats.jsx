import MetricCard from "./MetricCard";
import { calcWinningTrades, calcLosingTrades } from "../utils/calculations";

export default function PerformanceStats({
  trades,
  totalPnL,
  winRate,
  largestWin,
  largestLoss,
}) {
  const wins = calcWinningTrades(trades);
  const losses = calcLosingTrades(trades);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      <MetricCard
        label="Total P&L"
        value={`$${totalPnL.toLocaleString()}`}
        valueColor={totalPnL >= 0 ? "text-emerald-600" : "text-rose-600"}
      />
      <MetricCard label="Winning Trades" value={wins.length} />
      <MetricCard label="Losing Trades" value={losses.length} />
      <MetricCard label="Win Rate" value={`${winRate.toFixed(1)}%`} />
      <MetricCard
        label="Largest Win"
        value={`$${largestWin.toLocaleString()}`}
        valueColor="text-emerald-600"
      />
      <MetricCard
        label="Largest Loss"
        value={`$${Math.abs(largestLoss).toLocaleString()}`}
        valueColor="text-rose-600"
      />
    </div>
  );
}
