import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  primary: "bg-blue-700 hover:bg-blue-800",
  secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

