import MetricCard from "./MetricCard";
import {
  calcRemainingDrawdown,
  calcRemainingDailyLoss,
} from "../utils/calculations";

export default function AccountSummary({
  account,
  currentBalance,
  currentDrawdown,
  currentDayLoss,
}) {
  const remainingDrawdown = calcRemainingDrawdown(
    currentDrawdown,
    account.maxDrawdown,
  );
  const remainingDaily = calcRemainingDailyLoss(
    currentDayLoss,
    account.dailyLossLimit,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        label="Starting Balance"
        value={`$${account.startingBalance.toLocaleString()}`}
        icon="📊"
      />
      <MetricCard
        label="Current Balance"
        value={`$${currentBalance.toLocaleString()}`}
        valueColor="text-emerald-600"
        icon="💰"
      />
      <MetricCard
        label="Max Drawdown"
        value={`$${account.maxDrawdown.toLocaleString()}`}
        subValue={`Remaining: $${remainingDrawdown.toLocaleString()}`}
        icon="📉"
      />
      <MetricCard
        label="Daily Loss Limit"
        value={`$${account.dailyLossLimit.toLocaleString()}`}
        subValue={`Remaining: $${remainingDaily.toLocaleString()}`}
        icon="⛔"
      />
    </div>
  );
}
