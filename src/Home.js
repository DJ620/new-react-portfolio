import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Pages/Portfolio/Portfolio";

function Home() {
  const [page, setPage] = useState(<Portfolio />);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.fonts.load("12px Source Sans Pro").then(() => setFontLoaded(true));
  }, []);

  const styles = {
    body: {
      fontFamily: "Source Sans Pro",
      backgroundColor: color === "blue" ? "#ffffff" : "#14181b",
      // backgroundImage:
      //   "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
      // backgroundAttachment: "fixed",
      // backgroundPosition: "center",
      // backgroundRepeat: "repeat",
    },
    icons: {
      transform: "skewY(-6deg)",
      marginTop: "100px",
      marginBottom: "-300px",
    },
  };

  return (
    fontLoaded && (
      <div style={styles.body}>
        <Header setPage={setPage} color={color} setColor={setColor} />
        <Main page={page} color={color} />
        <Footer color={color}/>
      </div>
    )
  );
}

export default Home;
