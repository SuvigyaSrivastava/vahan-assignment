import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Employees from "./pages/Employees";
import Update from "./pages/Update";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
