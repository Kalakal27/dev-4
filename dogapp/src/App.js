import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Image from "./dog.js";
import About from "./about.js";
import Footer from './footer';
import "./footer.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/images" element={<Image/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer></Footer>
      {/* <div className='content'>
        <h1>content</h1>
      </div> */}
    </div>
  );
}

export default App;
