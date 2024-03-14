import React, { useEffect } from "react";
import Ticker from "react-ticker";
import Icons from "../Icons/Icons";
import "./Main.css";

function Main({ page, color }) {
  useEffect(() => {}, [page]);

    const styles = {
        icons: {
            transform: "skewY(-6deg)",
            height: "60px",
            marginTop: "10vh"
        },
        color: {
          backgroundColor: color === "blue" ? "#6f83f5" : "maroon"
        }
    };

  return (
      <>
    <div style={styles.icons}>
    <Ticker offset="run-in">{() => <Icons />}</Ticker>
    </div>
    <main style={styles.color}>
      <div className="block">{page}</div>
    </main>
    </>
  );
}

export default Main;
