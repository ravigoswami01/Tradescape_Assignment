# Tradescape — Trader Risk Dashboard

## How to run the project

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the app with `npm run dev`.
4. Open the local address shown in your browser.

## What this project is

This is a React dashboard that shows a trader’s account status, risk numbers, and trade performance.

- It updates numbers from the `TRADES` data.
- It shows balance, drawdown, win rate, and other key metrics.
- The layout works on different screen sizes.

## Equity Curve

There is a line chart that shows how the account balance changes after each trade.

- It helps see winning and losing streaks.
- It shows how the account grew or fell over time.

---

## Simple explanations

### What is drawdown?

Drawdown is the biggest drop in account value from a high point to a later low point.

### Why is remaining drawdown useful?

Remaining drawdown shows how much loss room is left before a risk limit is reached.

It is more helpful than just looking at profit/loss because it focuses on risk and staying inside limits.

### What could be improved?

- Add filters for day, week, or month views.
- Add a live simulation button for testing new trades.
- Show risk for different assets separately.
- Allow exporting a summary report.
