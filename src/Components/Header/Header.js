import React, { useState, useEffect } from 'react';
import headshot from "../../images/dh-PRINT-hr-1-round.png";
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Icons from '../Icons/Icons';
import "./Header.css";

function Header({setPage, color, setColor}) {
    const [portfolio, setPortfolio] = useState(true);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);

    const changeColor = () => {
        color === "blue" ? setColor("maroon") : setColor("blue");
    };

    const handlePortfolio = () => {
        setPortfolio(true);
        setAbout(false);
        setContact(false);
        setPage(<Portfolio />)
    };

    const handleAbout = () => {
        setAbout(true);
        setPortfolio(false);
        setContact(false);
        setPage(<About />)
    };

    const handleContact = () => {
        setContact(true);
        setPortfolio(false);
        setAbout(false);
        setPage(<Contact />)
    };

    const styles = {
        name: {
            color: color === "blue" ? "#5a72f9" : "maroon"
        },
        colorBtn: {
            display: "flex",
            border: "none"
        },
        blue: {
            backgroundColor: color === "blue" ? "#5a72f9" : "#5a72f98a",
            border: color === "blue" ? "2px outset rgb(154, 154, 154)" : "1px inset rgb(154, 154, 154)",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px"
        },
        maroon: {
            backgroundColor: color === "maroon" ? "maroon" : "rgba(128, 0, 0, 0.536)",
            border: color === "maroon" ? "2px outset gray" : "1px inset gray",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            marginTop: color === "maroon" ? "-1px" : "0px"
        }
    }

    return (
        <nav className="container">
            <button onClick={changeColor} className="colorBtn">
                <div style={styles.blue} className="btnPiece"/>
                <div style={styles.maroon} className="btnPiece"/>
            </button>
            <div className="row">
                <div className="col-xl-2 col-xs-12 ml-lg-5 ml-xl-n3 pl-0 d-flex justify-content-center">
                    <img src={headshot} className="img-fluid headshot" alt="DJ Headshot"/>
                </div>
                <div className="col-xl-5 col-lg-6 col-xs-12">
                    <div className="row">
                        <div className="col d-flex justify-content-center justify-content-lg-start ml-xl-n4">
                            <h1 className="display-3 font-weight-bold mt-3 name textShadow text-center" style={styles.name}>
                                <strong>DJ Hersh</strong>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex text-center justify-content-center justify-content-lg-start mr-xl-5 ml-xl-n4">
                            <h2 className="mt-n4 textShadow">Frontend Web Developer</h2>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-xs-12 mr-md-3 mr-lg-0 mr-xl-n3 ml-lg-n4 ml-xl-0 pr-md-n3 d-flex p-2 justify-content-center justify-content-lg-end">
                    <div className="one-pix">
                        <ul className="list-inline mt-5 ml-xl-5 text-center">
                            <li className="list-inline-item">
                                <h2 className={portfolio ? `link textShadow font-weight-bold ${color}` : `link textShadow ${color}`} style={styles.name} onClick={handlePortfolio}>Portfolio</h2>
                            </li>
                            <li className="list-inline-item ml-xs-3 ml-sm-4">
                                <h2 className={about ? `link textShadow font-weight-bold ${color}` : `link textShadow ${color}`} style={styles.name} onClick={handleAbout}>About</h2>
                            </li>
                            <li className="list-inline-item mr-lg-n4 ml-xs-3 ml-sm-4">
                                <h2 className={contact ? `link textShadow font-weight-bold ${color}` : `link textShadow ${color}`} style={styles.name} onClick={handleContact}>Contact</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
