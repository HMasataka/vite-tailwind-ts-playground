interface TableDataCellProps {
  children: React.ReactNode;
}

export const TableDataCell = ({ children }: TableDataCellProps) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {children}
    </td>
  );
}; 