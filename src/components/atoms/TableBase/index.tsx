import { ReactNode } from "react";

interface TableBaseProps {
  children: ReactNode;
}

export const TableBase = ({ children }: TableBaseProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">{children}</table>
  );
};

