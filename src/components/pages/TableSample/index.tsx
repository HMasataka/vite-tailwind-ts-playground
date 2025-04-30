import { Table } from "../../organisms/Table";
import { PageHeader } from "../../molecules/PageHeader";
import { Button } from "../../atoms/Button";

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

export const TableSample = () => {
  return (
    <div className="p-4">
      <PageHeader
        title="ユーザー一覧"
        actions={
          <Button variant="primary" onClick={open}>
            新規作成
          </Button>
        }
      />
      <Table data={sampleData} columns={columns} pageSize={3} />
    </div>
  );
};
