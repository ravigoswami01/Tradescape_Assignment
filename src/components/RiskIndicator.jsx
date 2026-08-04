import StatusBadge from "./StatusBadge";

export default function RiskIndicator({
  currentDrawdown,
  maxDrawdown,
  currentDayLoss,
  dailyLossLimit,
  status,
}) {
  const drawdownPct =
    maxDrawdown > 0 ? Math.min(100, (currentDrawdown / maxDrawdown) * 100) : 0;
  const lossPct =
    dailyLossLimit > 0
      ? Math.min(100, (currentDayLoss / dailyLossLimit) * 100)
      : 0;
  const barColor =
    status === "Safe"
      ? "bg-emerald-500"
      : status === "Approaching Limit"
        ? "bg-amber-500"
        : "bg-rose-500";

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/70">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-slate-700">Risk Status</h3>
          <StatusBadge status={status} />
        </div>
        <div className="text-xs text-slate-500">
          {status === "Safe"
            ? "✅ All limits are well within bounds"
            : status === "Approaching Limit"
              ? "⚠️ One or more limits are approaching"
              : "🚨 One or more limits are near or exceeded"}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Drawdown bar */}
        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-medium">Drawdown</span>
            <span>
              ${currentDrawdown.toLocaleString()} / $
              {maxDrawdown.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${barColor}`}
              style={{ width: `${drawdownPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0%</span>
            <span>${(maxDrawdown * 0.5).toLocaleString()}</span>
            <span>${maxDrawdown.toLocaleString()}</span>
          </div>
        </div>
        {/* Daily loss bar */}
        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-medium">Daily Loss</span>
            <span>
              ${currentDayLoss.toLocaleString()} / $
              {dailyLossLimit.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${barColor}`}
              style={{ width: `${lossPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0%</span>
            <span>$${(dailyLossLimit * 0.5).toLocaleString()}</span>
            <span>$${dailyLossLimit.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
