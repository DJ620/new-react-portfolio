import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  const [page, setPage] = useState(<Portfolio />);
  const styles = {
    body: {
    fontFamily: "Source Sans Pro",
    backgroundColor: "#ffffff",
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
      <Header setPage={setPage}/>
      <Main page={page}/>
      <Footer />
    </div>
  );
}

export default App;
