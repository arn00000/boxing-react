import { Navbar } from "./components/Navbar";
import { Navbar2 } from "./components/Navbar2";
import { Home } from "./components/Home";
import { PFP } from "./components/PFP";
import { Division } from "./components/Division";
import { TitleBelt } from "./components/TitleBelt";
import { Footer } from "./components/Footer";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {!show ? (
        <div className="h-screen">
          <Navbar />
          <Navbar2 setShow={setShow} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pfp" element={<PFP />} />
            <Route path="/division" element={<Division />} />
            <Route path="/titlebelt" element={<TitleBelt />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div className="h-screen w-full ">
          <div className="flex items-center justify-between w-full h-[10%] px-5 bg-darkblue">
            <h1 className="text-gold text-2xl tracking-[.30em]">ORTHODOX</h1>
            <button
              onClick={() => setShow(false)}
              className="material-symbols-outlined text-gold text-5xl"
            >
              close
            </button>
          </div>
          <div
            id="navpage"
            className="h-[90%] w-full flex justify-center pt-20 bg-darkblue animate__animated animate__fadeInDownBig"
          >
            <div
              id="navlink2"
              className="flex flex-col lg:flex-row text-white text-4xl space-y-10 lg:space-y-0 lg:space-x-10 tracking-widest"
            >
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/pfp">PFP</NavLink>
              <NavLink to="/division">DIVISION</NavLink>
              <NavLink to="/titlebelt">TITLE BELT</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
