import { ReactNode } from "react";
import { Text } from "../../atoms/Text";

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export const PageHeader = ({
  title,
  actions,
  onMenuToggle,
  isMenuOpen,
}: PageHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isMenuOpen ? "←" : "→"}
        </button>
        <Text variant="heading">{title}</Text>
      </div>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
  );
};
