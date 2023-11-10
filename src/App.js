import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import About from "./components/views/About";
import Blog from "./components/views/Blog";
import Home from "./components/views/Home";
import NoMatch from "./components/views/NoMatch";
import Post from "./components/views/Post";
import Prays from "./components/views/Prays";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Routes>
        <Route>
          <Route index element={<Prays />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
