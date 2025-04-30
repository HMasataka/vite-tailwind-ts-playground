import { useTable } from "../../../hooks/useTable";
import { TableHeader } from '../../molecules/TableHeader';
import { TableBody } from '../../molecules/TableBody';
import { Pagination } from '../../molecules/Pagination';

interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    width?: string;
  }[];
  pageSize?: number;
}

export const Table = <T extends object>({
  data,
  columns,
  pageSize = 10,
}: TableProps<T>) => {
  const {
    currentPage,
    totalPages,
    currentData,
    setCurrentPage,
    columns: tableColumns,
  } = useTable({
    data,
    columns,
    pageSize,
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={tableColumns} />
        <TableBody data={currentData} columns={tableColumns} />
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

