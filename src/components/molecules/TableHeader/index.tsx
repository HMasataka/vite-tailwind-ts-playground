interface TableHeaderProps<T> {
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
}

export const TableHeader = <T extends object>({
  columns,
}: TableHeaderProps<T>) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key as string}
            scope="col"
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              column.width ? `w-${column.width}` : ""
            }`}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

