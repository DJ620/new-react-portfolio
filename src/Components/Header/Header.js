import React, { useState } from 'react';
import headshot from "../../images/dh-PRINT-hr-1-round.png";
import "./Header.css";

function Header() {
    const [portfolio, setPortfolio] = useState(true);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);

    const handlePortfolio = () => {
        setPortfolio(true);
        setAbout(false);
        setContact(false);
    };

    const handleAbout = () => {
        setAbout(true);
        setPortfolio(false);
        setContact(false);
    };

    const handleContact = () => {
        setContact(true);
        setPortfolio(false);
        setAbout(false);
    };

    return (
        <nav className="container">
            <div className="row">
                <div className="col-xl-2 col-xs-12 ml-lg-5 ml-xl-n3 pl-0 d-flex justify-content-center">
                    <img src={headshot} className="img-fluid headshot" alt="DJ Headshot"/>
                </div>
                <div className="col-xl-5 col-lg-6 col-xs-12">
                    <div className="row">
                        <div className="col d-flex justify-content-center justify-content-lg-start ml-xl-n4">
                            <h1 className="display-3 font-weight-bold mt-3 name">
                                <strong>DJ Hersh</strong>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center justify-content-lg-start mr-xl-5 ml-xl-n4">
                            <h2 className="mt-n4">Welcome to my portfolio!</h2>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-xs-12 mr-md-3 mr-lg-0 mr-xl-n3 ml-lg-n4 ml-xl-0 pr-md-n3 d-flex p-2 justify-content-center justify-content-lg-end">
                    <div className="one-pix">
                        <ul className="list-inline mt-5 ml-xl-5 ">
                            <li className="list-inline-item">
                                <h2 className={portfolio ? "link font-weight-bold" : "link"} onClick={handlePortfolio}>Portfolio</h2>
                            </li>
                            <li className="list-inline-item ml-xs-3 ml-sm-4">
                                <h2 className={about ? "link font-weight-bold" : "link"} onClick={handleAbout}>About</h2>
                            </li>
                            <li className="list-inline-item mr-lg-n4 ml-xs-3 ml-sm-4">
                                <h2 className={contact ? "link font-weight-bold" : "link"} onClick={handleContact}>Contact</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
