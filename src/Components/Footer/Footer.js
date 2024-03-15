import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaReact } from "react-icons/fa";

function Footer({color}) {
    const styles = {
        colorMode: {
            color: color === "blue" ? "#14181b" : "white"
        }
    }
  return (
      <footer className="container">
          <div className="tw-flex tw-justify-center tw-gap-5 tw-mb-2">
              <a href="https://www.linkedin.com/in/djhersh/" target="_blank">
                  <FaLinkedin className="tw-text-6xl hover:tw-scale-125 iconShadow" />
              </a>
              <a href="https://github.com/DJ620" target="_blank">
                  <FaGithub style={styles.colorMode} className="tw-text-6xl hover:tw-scale-125 iconShadow"/>
              </a>
              <a href="https://twitter.com/DjhershWebDev" target="_blank">
                  <FaTwitter className="tw-text-6xl hover:tw-scale-125 iconShadow" />
              </a>
          </div>
          <div className="tw-flex tw-justify-center tw-gap-1">
            <FaReact className="tw-text-blue-400 tw-text-2xl"/>
            <p style={styles.colorMode}>Made with React</p>
          </div>
      </footer>
  )
};

export default Footer;
