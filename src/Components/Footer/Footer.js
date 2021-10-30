import React from "react";
import twitter from "../../images/twitter.png";
import logo from "../../images/logo192.png";
import github from "../../images/Icons/githubIcon.png";
import "./Footer.css";

function Footer() {
  return (
      <footer className="container">
          <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/djhersh/" target="_blank">
                  <img src="https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" alt="linkedin" className="linkedin"/>
              </a>
              <a href="https://github.com/DJ620" target="_blank">
                  <img src={github} alt="github" className="github mt-3"/>
              </a>
              <a href="https://twitter.com/DjhershWebDev" target="_blank">
                  <img src={twitter} alt="twitter" className="twitter mt-1 ml-1"/>
              </a>
          </div>
          <div className="row d-flex justify-content-center">
            <img src={logo} alt="react logo" className="react"/>
            <p className="made">Made with React</p>
          </div>
      </footer>
  )
};

export default Footer;
