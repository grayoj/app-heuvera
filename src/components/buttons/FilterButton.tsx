import React from "react";

interface FilterButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      className={`flex items-center border border-1 justify-center space-x-2 ${className}`}
      onClick={onClick}
    >
      <span className="text-sm">{label}</span>
      {icon}
    </button>
  );
};
