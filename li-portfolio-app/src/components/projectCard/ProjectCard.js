import React from "react";
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <sub>{props.info}</sub>
        <p>{props.description}</p>
        <div className="flex-wrapper">
          <a href={props.repoLink} target="_blank" rel="noreferrer"><button>GitHub repo</button></a>
          <a href={props.liveLink} target="_blank" rel="noreferrer"><button>Deployed page</button></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;