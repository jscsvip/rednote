interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string; // Optional className prop for additional styling
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      {/* Add other elements like buttons here if needed in the future */}
    </div>
  );
}