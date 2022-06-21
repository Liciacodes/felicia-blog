import "./App.css";
import Navbar from "./components/Navbar";
import NewBlog from "./components/NewBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
