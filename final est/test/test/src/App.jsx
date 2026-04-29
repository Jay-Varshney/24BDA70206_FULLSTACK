// Import React Router components
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    // Router wraps the whole app
    <Router>

      {/* Navigation Bar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        
        {/* Links for navigation */}
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      
      </nav>

      {/* Route Definitions */}
      <Routes>

        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </Router>
  );
}

export default App;