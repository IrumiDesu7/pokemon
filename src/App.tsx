import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./components/Detail";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="p-10">
        <Routes>
          <Route path="/pokemon/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
