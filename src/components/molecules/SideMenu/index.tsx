import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface SideMenuProps {
  items: MenuItem[];
  isOpen?: boolean;
  onToggle?: () => void;
}

export const SideMenu = ({ items, isOpen = true }: SideMenuProps) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <nav className="mt-4">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-4 hover:bg-gray-100"
          >
            {item.icon && <span className="mr-3">{item.icon}</span>}
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};
