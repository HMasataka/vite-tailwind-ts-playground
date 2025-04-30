import { useState } from "react";
import { Table } from "../../organisms/Table";
import { PageHeader } from "../../molecules/PageHeader";
import { Button } from "../../atoms/Button";
import { SideMenu } from "../../molecules/SideMenu";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: User[] = [
  { id: 1, name: "山田太郎", email: "yamada@example.com", role: "管理者" },
  {
    id: 2,
    name: "鈴木花子",
    email: "suzuki@example.com",
    role: "一般ユーザー",
  },
  { id: 3, name: "佐藤健一", email: "sato@example.com", role: "一般ユーザー" },
  { id: 4, name: "田中由美", email: "tanaka@example.com", role: "管理者" },
  { id: 5, name: "伊藤正", email: "ito@example.com", role: "一般ユーザー" },
];

const columns = [
  { key: "id" as keyof User, header: "ID", width: "1/12" },
  { key: "name" as keyof User, header: "名前", width: "3/12" },
  { key: "email" as keyof User, header: "メールアドレス", width: "4/12" },
  { key: "role" as keyof User, header: "権限", width: "2/12" },
];

const menuItems = [
  { label: "ホーム", path: "/" },
  { label: "プロフィール", path: "/profile" },
  { label: "設定", path: "/settings" },
];

export const TableSample = () => {
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
            title="ユーザー一覧"
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            actions={
              <Button variant="primary" onClick={() => {}}>
                新規作成
              </Button>
            }
          />
        </div>
        <main className="mt-20 p-8">
          <Table data={sampleData} columns={columns} pageSize={3} />
        </main>
      </div>
    </div>
  );
};
