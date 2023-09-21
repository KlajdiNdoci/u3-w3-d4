import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyArticles from "./components/MyArticles";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MyArticles />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
