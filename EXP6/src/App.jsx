
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>This is my home page.</p>
      <p>Welcome to my first React website!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>We are learning React development.</p>
      <p>Our goal is to create useful websites.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: example@gmail.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>My Website</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact Us</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
