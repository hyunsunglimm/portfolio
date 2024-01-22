import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1200px] mx-auto">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
