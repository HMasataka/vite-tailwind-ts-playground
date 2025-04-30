import { useState, useMemo } from "react";

interface TableColumn<T> {
  key: keyof T;
  header: string;
  width?: string;
}

interface UseTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  pageSize?: number;
}

interface UseTableReturn<T> {
  currentPage: number;
  totalPages: number;
  currentData: T[];
  setCurrentPage: (page: number) => void;
  columns: TableColumn<T>[];
}

export const useTable = <T extends object>({
  data,
  columns,
  pageSize = 10,
}: UseTableProps<T>): UseTableReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize]);

  return {
    currentPage,
    totalPages,
    currentData,
    setCurrentPage,
    columns,
  };
};

