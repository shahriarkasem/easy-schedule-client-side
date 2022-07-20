
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Home/components/Footer/Footer";

import Home from "./pages/Home/Home";

function App() {
  return (


    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
