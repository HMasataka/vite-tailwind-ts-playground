import { ReactNode } from "react";
import { Text } from "../../atoms/Text";

interface PageHeaderProps {
  title: string;
  actions?: ReactNode;
}

export const PageHeader = ({ title, actions }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <Text variant="heading">{title}</Text>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
  );
};

