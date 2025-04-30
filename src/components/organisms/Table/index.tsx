import { useTable } from "../../../hooks/useTable";

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
        <thead className="bg-gray-50">
          <tr>
            {tableColumns.map((column) => (
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
        <tbody className="bg-white divide-y divide-gray-200">
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {tableColumns.map((column) => (
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
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          前へ
        </button>
        <span>
          ページ {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          次へ
        </button>
      </div>
    </div>
  );
};

