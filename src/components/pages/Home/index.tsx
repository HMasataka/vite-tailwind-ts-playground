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
      <SideMenu items={menuItems} isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <main className={`flex-1 p-8 transition-all duration-300 ${isMenuOpen ? "ml-64" : "ml-16"}`}>
        <PageHeader
          title="ようこそ"
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
        <p>これはサイドメニューのデモページです。</p>
      </main>
    </div>
  );
};

