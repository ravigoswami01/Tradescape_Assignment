export default function TradesTable({ trades }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200/70 overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Trade History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Asset</th>
              <th className="px-5 py-3 text-left font-medium">Direction</th>
              <th className="px-5 py-3 text-right font-medium">P&L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {trades.map((trade) => (
              <tr
                key={trade.id}
                className="hover:bg-slate-50/60 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-slate-700">
                  {trade.asset}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${trade.direction === "Long" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}
                  >
                    {trade.direction}
                  </span>
                </td>
                <td
                  className={`px-5 py-3 text-right font-medium ${trade.pnl >= 0 ? "text-emerald-600" : "text-rose-600"}`}
                >
                  {trade.pnl >= 0 ? "+" : ""}
                  {trade.pnl.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
