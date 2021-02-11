import React from "react";
import headshot from "../../images/headshot2.jpg";
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
            Hello there! I'm DJ, a web developer, and a recent graduate of the
            UCLA Extension Full-Stack Web Development Coding Bootcamp. During
            the class, I learned a lot, and very fast! We focused on JavaScript,
            and I learned to use Node, Express, React, MySQL, MongoDB, and so
            much more. Prior to taking this bootcamp, I had done some learning
            on my own through websites such as CodeCademy and FreeCodeCamp. I
            gotta say, I've really enjoyed learning about how the internet
            thinks! I love how logical it all is.
          </h5>
          <h5 className="text-white mb-5" style={styles.main}>
            Before I decided to jump into the world of coding, I was living in
            New York City pursuing a career as an actor. I know, kinda cliche,
            but I enjoyed my life. I was working as a server (an actor working
            as a server? Never...) at Ellen's Stardust Diner. I wasn't just an
            ordinary server, I was a SINGING server. That's right, you read that
            correctly. While I would go off to fetch your Coca-cola, I would
            come back with a microphone in my other hand belting out 50's songs
            and showtunes. It was a fun time! Once the world kinda fell into a
            dark pit of despair (you know what I'm talking about), I realized
            that I wanted stability and structure in my life. So, here I am,
            re-inventing myself as the world's best web developer! With how much
            I'm enjoying coding, I can't believe I never tried it before now!
            Please enjoy looking through my portfolio of projects I've been
            working on!
          </h5>
        </div>
        <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
            <img src={headshot} alt="DJ Headhsot" className="img-fluid mb-xl-5" style={styles.headshot} />
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 mt-5 mt-lg-0">
          <a href={resume} target="_blank" className="btn btn-lg">Download Resume</a>
      </div>
    </div>
  );
}

export default About;
