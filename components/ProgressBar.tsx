interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  value,
  label,
  showPercentage = true,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="mb-2 flex items-center justify-between">
          {label && <span className="text-sm font-medium text-earth">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-semibold text-forest">{clamped}%</span>
          )}
        </div>
      )}
      <div className="h-3 w-full overflow-hidden rounded-full bg-stone-dark">
        <div
          className="h-full rounded-full bg-forest transition-all duration-700"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
