export const ACCOUNT = {
    startingBalance: 100000,
    maxDrawdown: 10000,
    dailyLossLimit: 5000,
};

export const TRADES = [
    { id: 't1', asset: 'BTC', direction: 'Long', pnl: 1200 },
    { id: 't2', asset: 'ETH', direction: 'Short', pnl: -450 },
    { id: 't3', asset: 'BTC', direction: 'Short', pnl: 800 },
    { id: 't4', asset: 'SOL', direction: 'Long', pnl: -300 },
    { id: 't5', asset: 'ETH', direction: 'Long', pnl: 2000 },
];