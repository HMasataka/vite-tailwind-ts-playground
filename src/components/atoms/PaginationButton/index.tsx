interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export const PaginationButton = ({
  onClick,
  disabled,
  children,
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      {children}
    </button>
  );
};

