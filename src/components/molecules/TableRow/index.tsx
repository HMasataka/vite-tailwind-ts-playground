import { TableDataCell } from '../../atoms/TableDataCell';

interface TableRowProps<T> {
  row: T;
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
}

export const TableRow = <T extends object>({ row, columns }: TableRowProps<T>) => {
  return (
    <tr className="hover:bg-gray-50">
      {columns.map((column) => (
        <TableDataCell key={column.key as string}>
          {row[column.key] as React.ReactNode}
        </TableDataCell>
      ))}
    </tr>
  );
}; 