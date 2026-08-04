export default function MetricCard({
  label,
  value,
  subValue,
  subLabel,
  valueColor = "text-slate-900",
  icon,
}) {
  return (
    <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-slate-200/70 card-hover">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {label}
          </p>
          <p className={`text-2xl font-bold mt-1 ${valueColor}`}>{value}</p>
          {subValue !== undefined && (
            <p className="text-xs text-slate-500 mt-0.5">
              {subLabel || ""} {subValue}
            </p>
          )}
        </div>
        {icon && <div className="text-slate-400 text-xl">{icon}</div>}
      </div>
    </div>
  );
}
