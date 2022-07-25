import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/components/Footer/Footer";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Home/components/Aboutus/Aboutus";
import Navbar from "./pages/Home/components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import HowItWorks from "./pages/Common/HowItWorks";
import Feature from "./pages/Home/components/PowerfulFeatures/Feature";
import Individuals from "./pages/Common/Individuals";
import Teams from "./pages/Common/Teams";
import Pricing from "./pages/Common/Pricing";
import Blog from "./pages/Common/Resources/Blog";
import Support from "./pages/Common/Resources/Support";
import WhatsNew from "./pages/Common/Resources/WhatsNew";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/howitworks" element={<HowItWorks></HowItWorks>}></Route>
        <Route path="/feature" element={<Feature></Feature>}></Route>
        <Route path="/individuals" element={<Individuals></Individuals>}></Route>
        <Route path="/teams" element={<Teams></Teams>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/whatsnew" element={<WhatsNew></WhatsNew>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/support" element={<Support></Support>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
