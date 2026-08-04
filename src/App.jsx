import { useMemo } from "react";
import { ACCOUNT, TRADES } from "./data/mockData";
import {
  calcTotalPnL,
  calcCurrentBalance,
  calcCurrentDrawdown,
  calcCurrentDayLoss,
  calcWinRate,
  calcLargestWin,
  calcLargestLoss,
  calcRiskStatus,
  buildEquityCurve,
} from "./utils/calculations";

import AccountSummary from "./components/AccountSummary";
import PerformanceStats from "./components/PerformanceStats";
import RiskIndicator from "./components/RiskIndicator";
import TradesTable from "./components/TradesTable";
import EquityCurve from "./components/EquityCurve";
import StatusBadge from "./components/StatusBadge";

function App() {
  const trades = TRADES;
  const account = ACCOUNT;

  const totalPnL = useMemo(() => calcTotalPnL(trades), [trades]);
  const currentBalance = useMemo(
    () => calcCurrentBalance(account.startingBalance, trades),
    [account.startingBalance, trades],
  );
  const currentDrawdown = useMemo(
    () => calcCurrentDrawdown(account.startingBalance, trades),
    [account.startingBalance, trades],
  );
  const currentDayLoss = useMemo(() => calcCurrentDayLoss(trades), [trades]);
  const winRate = useMemo(() => calcWinRate(trades), [trades]);
  const largestWin = useMemo(() => calcLargestWin(trades), [trades]);
  const largestLoss = useMemo(() => calcLargestLoss(trades), [trades]);
  const riskStatus = useMemo(
    () =>
      calcRiskStatus(
        currentDrawdown,
        account.maxDrawdown,
        currentDayLoss,
        account.dailyLossLimit,
      ),
    [
      currentDrawdown,
      account.maxDrawdown,
      currentDayLoss,
      account.dailyLossLimit,
    ],
  );
  const equityData = useMemo(
    () => buildEquityCurve(account.startingBalance, trades),
    [account.startingBalance, trades],
  );

  return (
    <div className="min-h-screen bg-slate-50/80">
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">
                Trader Risk Dashboard
              </h1>
              <p className="text-xs text-slate-500">
                Tradescape — Evaluation Monitor
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-500">Status:</span>
            <StatusBadge status={riskStatus} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Account
          </h2>
          <AccountSummary
            account={account}
            currentBalance={currentBalance}
            currentDrawdown={currentDrawdown}
            currentDayLoss={currentDayLoss}
          />
        </section>

        <section>
          <RiskIndicator
            currentDrawdown={currentDrawdown}
            maxDrawdown={account.maxDrawdown}
            currentDayLoss={currentDayLoss}
            dailyLossLimit={account.dailyLossLimit}
            status={riskStatus}
          />
        </section>

        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Trading Performance
          </h2>
          <PerformanceStats
            trades={trades}
            totalPnL={totalPnL}
            winRate={winRate}
            largestWin={largestWin}
            largestLoss={largestLoss}
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <EquityCurve
              data={equityData}
              startingBalance={account.startingBalance}
            />
          </div>
          <div className="lg:col-span-2">
            <TradesTable trades={trades} />
          </div>
        </section>

        <div className="text-xs text-slate-400 border-t border-slate-200/60 pt-4 text-center">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>
              Additional feature: Equity curve chart shows cumulative balance
              progression
            </span>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
