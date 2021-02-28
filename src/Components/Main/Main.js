import React, { useEffect } from "react";
import Ticker from "react-ticker";
import Test from "../Icons/Test";
import "./Main.css";

function Main({ page }) {
  useEffect(() => {}, [page]);

    const styles = {
        icons: {
            transform: "skewY(-6deg)",
            height: "60px",
            marginTop: "10vh"
        }
    }

  return (
      <>
    <div style={styles.icons}>
    <Ticker offset="run-in">{() => <Test />}</Ticker>
    </div>
    <main>
      <div className="block">{page}</div>
    </main>
    </>
  );
}

export default Main;
