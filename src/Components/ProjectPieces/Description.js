import React from "react";

function Description({ side, description, tech }) {
  const top = `col-md-6 mb-5 ${side}`;

  const styles = {
    descr: {
      lineHeight: "1.5em",
      fontSize: "22px",
      textShadow: "5px 5px 25px black",
      color: "white",
    },
    list: {
      lineHeight: "1.5em",
      fontSize: "22px",
      textShadow: "5px 5px 25px black",
      color: "#F7B801",
      textAlign: "center",
    },
  };
  return (
    <div className={top}>
      <p style={styles.descr} dangerouslySetInnerHTML={{ __html: description }}></p>
      <p style={styles.list}>Technologies Used:</p>
      <ul className="list-unstyled" style={styles.list}>
        {tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
