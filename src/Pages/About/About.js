import React from "react";
import headshot from "../../images/headshot2.jpg";
import icLogo from "../../images/Icons/ic-logo.png";
import resume from "../../images/DJ-resume.pdf";
import "./About.css";

const styles = {
  main: {
    lineHeight: "1.5em",
    fontSize: "22px",
    textShadow: "5px 5px 25px black",
  },
  headshot: {
      boxShadow: "5px 5px 20px -5px black",
      borderRadius: "25px"
  },
  icLogo : {
    float: "right"
  },
  button: {
      color: "white",
      backgroundColor: "#F7B801",
      boxShadow: "2px 2px 10px 1px black"
  }
};

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
          <h5 className="text-white mb-5" style={styles.main}>
          Hello there! I'm DJ, a web developer, and a graduate of the UCLA Extension Full-Stack Web Development Coding Bootcamp. During the class, I learned a lot, and very fast! We focused on JavaScript, and I learned to use Node, Express, React, MySQL, MongoDB, and so much more. I gotta say, I've really enjoyed learning about how the internet thinks!
          </h5>
          <h5 className="text-white mb-5" style={styles.main}>
          Before I decided to jump into the world of coding, I was living in New York City pursuing a career as an actor and working as a server (an actor working as a server? Never...) at Ellen's Stardust Diner. I wasn't just an ordinary server, I was a SINGING server. That's right, while I would go off to fetch your Coca-cola, I would come back with a microphone in my other hand belting out 50's songs and showtunes. It was a fun time! Once the world kinda fell into a dark pit of despair (you know what I'm talking about), I realized that I wanted stability and structure in my life. 
          </h5>
          <h5 className="text-white mb-5" style={styles.main}>
          Within 3 months of graduating my bootcamp, I was fortunate enough to get a Jr. Frontend Developer job at a company called InvestCloud! The job is going very well, and after only 5 months of employment, they asked me to become a mentor for other developers in the company! I can’t wait to see what the future holds and where this new career path will take me! Please enjoy looking through my portfolio of projects I've worked on!
          </h5>
        </div>
        <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
            <img src={headshot} alt="DJ Headhsot" className="img-fluid" style={styles.headshot} />
            <div className="mt-4 mb-xl-5 mr-md-5 pr-md-5 mr-lg-0 pr-lg-0 d-flex justify-content-center">
              <img src={icLogo} alt="InvestCloud logo" className="img-fluid mr-md-4 mr-lg-0"/>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 mt-5 mt-lg-0">
          <a href={resume} target="_blank" className="btn btn-lg">Download Resume</a>
      </div>
    </div>
  );
}

export default About;
