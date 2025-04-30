interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

export const PageIndicator = ({ currentPage, totalPages }: PageIndicatorProps) => {
  return (
    <div className="h-full flex items-center">
      ページ {currentPage} / {totalPages}
    </div>
  );
}; 