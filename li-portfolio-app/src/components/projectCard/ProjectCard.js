import React from "react";
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className="card">
        <div className="img-container">
        <img alt={props.title} src={props.image}/>
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button src={props.link}>Go to GitHub repo</button>
      </div>
    </div>


    )
}

export default ProjectCard;