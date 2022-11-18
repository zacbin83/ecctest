import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin"
import Details from "./pages/Details/Details";
import Sort from "./pages/Details/Sort/Sort";
// import Landing from "./react-code-editor/src/components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/sort" element={<Sort/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
