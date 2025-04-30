import { useState } from "react";
import { SideMenu } from "../../molecules/SideMenu";
import { PageHeader } from "../../molecules/PageHeader";

const menuItems = [
  { label: "ホーム", path: "/" },
  { label: "プロフィール", path: "/profile" },
  { label: "設定", path: "/settings" },
];

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <SideMenu
        items={menuItems}
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div className={`flex-1 transition-all duration-300 ${isMenuOpen ? "ml-64" : "ml-16"}`}>
        <div className="fixed top-0 right-0 left-0 z-10 bg-white shadow-sm">
          <PageHeader
            title="ようこそ"
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <main className="mt-20 p-8">
          <p>これはサイドメニューのデモページです。</p>
        </main>
      </div>
    </div>
  );
};
