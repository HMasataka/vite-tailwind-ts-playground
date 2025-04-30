interface TableHeaderCellProps {
  header: string;
  width?: string;
}

export const TableHeaderCell = ({ header, width }: TableHeaderCellProps) => {
  return (
    <th
      scope="col"
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
        width ? `w-${width}` : ''
      }`}
    >
      {header}
    </th>
  );
}; 