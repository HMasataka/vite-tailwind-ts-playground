import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TableSample } from "./components/pages/TableSample";
import Pressable from "./components/atoms/Pressable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableSample />} />
        <Route
          path="/profile"
          element={
            <Pressable>
              {({ pressed }) => (
                <span style={{ color: pressed ? "red" : "black" }}>
                  {pressed ? "押されています" : "押してみてください"}
                </span>
              )}
            </Pressable>
          }
        />
        <Route path="/settings" element={<div>設定ページ</div>} />
      </Routes>
    </Router>
  );
}

export default App;
