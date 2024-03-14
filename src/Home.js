import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Pages/Portfolio/Portfolio";

function Home() {
  const [page, setPage] = useState(<Portfolio />);
  const [color, setColor] = useState("blue");
  const styles = {
    body: {
    fontFamily: "Source Sans Pro",
    backgroundColor: color === "blue" ? "#ffffff" : "gray",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
  },
  icons: {
    transform: "skewY(-6deg)",
    marginTop: "100px",
    marginBottom: "-300px"
  }
};

  return (
    <div style={styles.body}>
      <Header setPage={setPage} color={color} setColor={setColor}/>
      <Main page={page} color={color}/>
      <Footer />
    </div>
  );
}

export default Home;
