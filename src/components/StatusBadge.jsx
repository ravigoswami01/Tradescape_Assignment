export default function StatusBadge({ status }) {
  const config = {
    Safe: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "Safe",
    },
    "Approaching Limit": {
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-500",
      label: "Approaching Limit",
    },
    "At Risk": {
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
      label: "At Risk",
    },
  };
  const c = config[status] || config.Safe;
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${c.bg} ${c.text} font-semibold text-sm`}
    >
      <span className={`w-2.5 h-2.5 rounded-full ${c.dot} pulse-dot`}></span>
      {c.label}
    </div>
  );
}
