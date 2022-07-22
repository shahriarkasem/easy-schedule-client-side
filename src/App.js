import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/components/Footer/Footer";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Home/components/Aboutus/Aboutus";
import Navbar from "./pages/Home/components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
