import React from "react";
import "./Icons.css";
import axios from "../../images/Icons/axios.png";
import bootstrap from "../../images/Icons/bootstrap.png";
import css from "../../images/Icons/css.png";
import emailjs from "../../images/Icons/emailjs.png";
import express from "../../images/Icons/express.png";
import git from "../../images/Icons/git.png";
import handlebars from "../../images/Icons/handlebars.png";
import html from "../../images/Icons/html.png";
import javascript from "../../images/Icons/javascript.png";
import jest from "../../images/Icons/jest.png";
import jquery from "../../images/Icons/jQuery.png";
import jwt from "../../images/Icons/jsonwebtoken.png";
import mongodb from "../../images/Icons/mongoDB.png";
import mongoose from "../../images/Icons/mongoose.png";
import mysql from "../../images/Icons/mysql.png";
import node from "../../images/Icons/nodejs.png";
import passport from "../../images/Icons/passport.png";
import react from "../../images/Icons/react.png";
import redux from "../../images/Icons/Redux.png";
import sequelize from "../../images/Icons/sequelize.png";
import vscode from "../../images/Icons/vscode.png";

function IconsBlock() {
  const icons = [
    {
      tech: "HTML",
      img: html,
    },
    {
      tech: "CSS",
      img: css,
    },
    {
      tech: "JavaScript",
      img: javascript,
    },
    {
      tech: "jQuery",
      img: jquery,
    },
    {
      tech: "Bootstrap",
      img: bootstrap,
    },
    {
      tech: "Node",
      img: node,
    },
    {
      tech: "Express",
      img: express,
    },
    {
      tech: "React",
      img: react,
    },
    {
      tech: "Redux",
      img: redux,
    },
    {
      tech: "MySQL",
      img: mysql,
    },
    {
      tech: "Sequelize",
      img: sequelize,
    },
    {
      tech: "MongoDB",
      img: mongodb,
    },
    {
      tech: "Mongoose",
      img: mongoose,
    },
    {
      tech: "Passport",
      img: passport,
    },
    {
      tech: "JSON Web Token (JWT)",
      img: jwt,
    },
    {
      tech: "Axios",
      img: axios,
    },
    {
      tech: "Handlebars",
      img: handlebars,
    },
    {
      tech: "Jest",
      img: jest,
    },
    {
      tech: "EmailJS",
      img: emailjs,
    },
    {
      tech: "Git",
      img: git,
    },
    {
      tech: "VS Code",
      img: vscode,
    },
  ];

  const styles = {
    img: {
      borderRadius: "0px",
    },
    container: {
      marginTop: "-120px",
      marginBottom: "-20px"
    }
  };

  return (
    <div className="container" style={styles.container}>
      <div className="row d-flex justify-content-center iconcontainer">
        <div className="row d-flex justify-content-center iconrow">
          {icons.map((icon) => (
            <div className="flex align-items-center">
              <img
                src={icon.img}
                className="my-3"
                alt="tech icon"
                style={styles.img}
              />
              <p className="mx-2 pt-3">{icon.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IconsBlock;
