import { PaginationButton } from "../../atoms/PaginationButton";
import { PageIndicator } from "../../atoms/PageIndicator";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-between items-center mt-4 h-10">
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        前へ
      </PaginationButton>
      <PageIndicator currentPage={currentPage} totalPages={totalPages} />
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        次へ
      </PaginationButton>
    </div>
  );
};
