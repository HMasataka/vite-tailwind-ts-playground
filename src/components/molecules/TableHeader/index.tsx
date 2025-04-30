import { TableHeaderCell } from '../../atoms/TableHeaderCell';

interface TableHeaderProps<T> {
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
}

export const TableHeader = <T extends object>({ columns }: TableHeaderProps<T>) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <TableHeaderCell
            key={column.key as string}
            header={column.header}
            width={column.width}
          />
        ))}
      </tr>
    </thead>
  );
};

