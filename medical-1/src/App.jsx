import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

// #0d4569
function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#c7dadabe] to-[#cae4e4]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
