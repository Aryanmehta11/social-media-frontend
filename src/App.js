import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
