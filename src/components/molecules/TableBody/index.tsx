interface TableBodyProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
}

export const TableBody = <T extends object>({
  data,
  columns,
}: TableBodyProps<T>) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-50">
          {columns.map((column) => (
            <td
              key={column.key as string}
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {row[column.key] as React.ReactNode}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
