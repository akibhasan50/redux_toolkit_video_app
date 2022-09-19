// import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos/:videoId" element={<Video></Video>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
