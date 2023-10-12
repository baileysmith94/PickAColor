import { Routes, Route} from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Mystery from "./components/Mystery";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/blue' element={<Blue />} />
          <Route path= '/red' element={<Red />} />
          <Route path= '/mystery' element={<Mystery />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
