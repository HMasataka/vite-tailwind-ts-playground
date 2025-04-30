import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<div>プロフィールページ</div>} />
        <Route path="/settings" element={<div>設定ページ</div>} />
      </Routes>
    </Router>
  );
}

export default App;
