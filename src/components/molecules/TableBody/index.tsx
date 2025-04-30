import { TableRow } from '../TableRow';

interface TableBodyProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
}

export const TableBody = <T extends object>({ data, columns }: TableBodyProps<T>) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, rowIndex) => (
        <TableRow key={rowIndex} row={row} columns={columns} />
      ))}
    </tbody>
  );
};
