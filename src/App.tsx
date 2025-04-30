import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableSample } from "./components/pages/TableSample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableSample />} />
        <Route path="/profile" element={<div>プロフィールページ</div>} />
        <Route path="/settings" element={<div>設定ページ</div>} />
      </Routes>
    </Router>
  );
}

export default App;
