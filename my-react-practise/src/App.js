import './App.css';
import { Blog } from "./Blog";
import { Error } from "./Error";
import { Contact } from "./Contact";
import Home from "./Home";
import Product from "./Product";
import Hoc from "./HOC/hoc";
import Profile from "./HOC/UserProfile";
import Todo from "./TodoApp";
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
        <Link to="/todo">Todo</Link>
        <Link to="/hoc">Hoc</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Blog/>} />
        <Route path="/product" element={<Product/>} />        
        <Route path="/hoc" element={<Hoc/>} />                  
        <Route path="/todo" element={<Todo/>} />
        <Route path="/userProfile" element={<Profile/>} />
        {/* <Redirect from="/old-about" to="/about" /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
