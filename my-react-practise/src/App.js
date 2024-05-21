import './App.css';
import { Blog } from "./Blog";
import { Error } from "./Error";
import { Contact } from "./Contact";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
  // Redirect,
  Link,
} from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div class="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Blog/>} />
        {/* <Redirect from="/old-about" to="/about" /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
