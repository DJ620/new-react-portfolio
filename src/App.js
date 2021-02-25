import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Icons from "./Components/Icons/Icons";
import Main from "./Components/Main/Main";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  const [page, setPage] = useState(<Portfolio />);
  const body = {
    fontFamily: "Source Sans Pro",
    backgroundColor: "#ffffff",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
  };

  return (
    <div style={body}>
      <Header setPage={setPage}/>
      <Icons />
      <Main page={page}/>
      <Footer />
    </div>
  );
}

export default App;
