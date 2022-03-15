import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Srearch from "./components/Search";
import Searched from "./pages/Searched";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched" element={<Searched />} />
      </Routes>

      {/* load home */}

      {/*<Home/>*/}
    </div>
  );
}

export default App;
