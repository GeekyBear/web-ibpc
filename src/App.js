import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import About from "./components/views/About";
import Blog from "./components/views/Blog";
import Home from "./components/views/Home";
import NoMatch from "./components/views/NoMatch";
import Post from "./components/views/Post";
import Prays from "./components/views/Prays";
import Ministries from "./components/views/Ministries";
import Declaration from "./components/views/Declaration";
import Meetings from "./components/views/Meetings";
import Contact from "./components/views/Contact";
import Resources from "./components/views/Resources";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="blog" element={<Blog />} />
          <Route path="prays" element={<Prays />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="declaration" element={<Declaration />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
