import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Carouls } from "./components/Carousel";
import { Cart } from "./components/Cart";
import { useState } from "react";
function App() {
  // const [tab, settab] = useState("Home");
  return (
    <>
      <Header></Header>
      <div className="rk-container">
        {/* <SideBar tab={tab} settab={settab}></SideBar> */}
        {/* <Carouls></Carouls> */}
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        {/* <Carouls></Carouls> */}
      </div>
      {/* <Carouls></Carouls> */}
    </>
  );
}

export default App;
