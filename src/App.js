import React from "react";
import Header from "./Components/Header/Header";

function App() {
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
      <Header />
    </div>
  );
}

export default App;
