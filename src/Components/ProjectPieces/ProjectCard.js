import React from 'react';
import "./Project.css";

function ProjectCard({name, deployed, image, repo, card}) {
    const top = `col-md-6 d-inline-flex mb-n5 mb-md-0 ${card}`;
    const body = `card-body ${card}`;

    const increase = (e) => {
        e.target.style.boxShadow = "5px 5px 15px 2px black";
    };

    const regular = (e) => {
        e.target.style.boxShadow = "2px 2px 10px 1px black";
    }

    const styles = {
        project: {
            color: "#F7B801",
            webkitTextStroke: "1px #576ef0",
            textShadow: "5px 5px 20px black"
        },
        image: {
            boxShadow: "2px 2px 10px 1px black"
        }
    }
    return (
        <div className={top}>
            <div className="card">
                <div className={body}>
                    <h1 className="card-title text-center font-weight-bold" style={styles.project}>{name}</h1>
                    <a href={deployed} target="_blank">
                        <img src={image} className="img-fluid mb-5" style={styles.image} onMouseOver={increase} onMouseLeave={regular}/>
                    </a>
                    <div className="d-flex justify-content-around">
                        <a href={repo} target="_blank" className="btn text-white mt-n4 repo">
                            <span className="fab fa-github"/>Github Repository
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
