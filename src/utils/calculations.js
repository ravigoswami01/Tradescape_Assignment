export function calcTotalPnL(trades) {
    return trades.reduce((sum, t) => sum + t.pnl, 0);
}

export function calcWinningTrades(trades) {
    return trades.filter(t => t.pnl > 0);
}

export function calcLosingTrades(trades) {
    return trades.filter(t => t.pnl < 0);
}

export function calcWinRate(trades) {
    if (trades.length === 0) return 0;
    const wins = calcWinningTrades(trades).length;
    return (wins / trades.length) * 100;
}

export function calcLargestWin(trades) {
    const wins = calcWinningTrades(trades);
    if (wins.length === 0) return 0;
    return Math.max(...wins.map(t => t.pnl));
}

export function calcLargestLoss(trades) {
    const losses = calcLosingTrades(trades);
    if (losses.length === 0) return 0;
    return Math.min(...losses.map(t => t.pnl));
}

export function calcCurrentBalance(startingBalance, trades) {
    return startingBalance + calcTotalPnL(trades);
}

export function calcCurrentDrawdown(startingBalance, trades) {
    let running = startingBalance;
    let peak = startingBalance;
    let maxDrawdown = 0;
    for (const trade of trades) {
        running += trade.pnl;
        if (running > peak) peak = running;
        const drawdown = peak - running;
        if (drawdown > maxDrawdown) maxDrawdown = drawdown;
    }
    return maxDrawdown;
}

export function calcRemainingDrawdown(currentDrawdown, maxDrawdownLimit) {
    return Math.max(0, maxDrawdownLimit - currentDrawdown);
}

export function calcCurrentDayLoss(trades) {
    const losses = calcLosingTrades(trades);
    return losses.reduce((sum, t) => sum + Math.abs(t.pnl), 0);
}

export function calcRemainingDailyLoss(currentDayLoss, dailyLossLimit) {
    return Math.max(0, dailyLossLimit - currentDayLoss);
}

export function calcRiskStatus(currentDrawdown, maxDrawdown, currentDayLoss, dailyLossLimit) {
    const drawdownRatio = maxDrawdown > 0 ? currentDrawdown / maxDrawdown : 0;
    const lossRatio = dailyLossLimit > 0 ? currentDayLoss / dailyLossLimit : 0;
    const maxRatio = Math.max(drawdownRatio, lossRatio);
    if (maxRatio >= 0.8) return 'At Risk';
    if (maxRatio >= 0.5) return 'Approaching Limit';
    return 'Safe';
}

export function buildEquityCurve(startingBalance, trades) {
    const points = [];
    let running = startingBalance;
    points.push({ label: 'Start', value: startingBalance });
    for (const trade of trades) {
        running += trade.pnl;
        points.push({ label: `${trade.asset} ${trade.direction}`, value: running });
    }
    return points;
}