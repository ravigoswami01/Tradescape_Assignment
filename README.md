# Tradescape — Trader Risk Dashboard

## Getting Started

Pretty straightforward to get running:

1. Clone the repo
2. Run `npm install` to grab the dependencies
3. Start it with `npm run dev`
4. Hit the localhost URL that shows up in your terminal

## What's in Here

Built this as a React dashboard that pulls all its data from a mock `TRADES` array—nothing's hardcoded. You get a real-time view of your balance, drawdown, win rate, and all the key metrics that matter. The whole thing is responsive, so it looks good on your phone, tablet, or desktop, styled up with Tailwind.

## The Equity Curve

One of the cooler features is the equity curve—a line chart that tracks your account balance as it changes with each trade. Instead of just seeing "you made $5K," you get to see the whole journey. Where did you struggle? Where did you crush it? That sequence matters way more than just looking at a single number.

## FAQ

**What's drawdown?**

Drawdown is basically the steepest drop your account takes from its highest point. You're trading, you hit a peak, then some losing trades happen—that gap between the peak and the bottom? That's your drawdown.

**Why should I watch my remaining drawdown instead of just P&L?**

P&L tells you if you're up or down. Remaining drawdown tells you _how much risk room you have left_. If your limit is $10K and you've already lost $6K, you've got $4K left. For funded traders, this is critical—blow past that limit and your account gets shut down. So tracking it keeps you from making reckless decisions.

## What's Next

If I had more time, these would be solid additions:

- **Time filters** – zoom in on just today, this week, or this month
- **Simulation mode** – test out trades before you actually make them
- **Risk breakdown by asset** – see which positions are actually hurting your drawdown
- **Export reports** – download clean PDFs to share with your coach or mentor
