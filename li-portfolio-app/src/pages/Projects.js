import React from "react";
import ProjectCard from "../components/projectCard/ProjectCard"
import projects from '../projects.json';
import FlexWrapper from "../components/flex-wrapper/FlexWrapper";
import Header from "../components/header/Header";

function Projects() {
    return (
        <>
           <h1>Projects</h1>
            <div className="flex">
            <ProjectCard
                    title={projects[0].title}
                    image={projects[0].image}
                    description={projects[0].description}
                    link={projects[0].link}
                />
                <ProjectCard
                    title={projects[1].title}
                    image={projects[1].image}
                    description={projects[1].description}
                    link={projects[1].link}
                />
                <ProjectCard
                    title={projects[2].title}
                    image={projects[2].image}
                    description={projects[2].description}
                    link={projects[2].link}
                />
                <ProjectCard
                    title={projects[3].title}
                    image={projects[3].image}
                    description={projects[3].description}
                    link={projects[3].link}
                />
                <ProjectCard
                    title={projects[4].title}
                    image={projects[4].image}
                    description={projects[4].description}
                    link={projects[4].link}
                />
                <ProjectCard
                    title={projects[5].title}
                    image={projects[5].image}
                    description={projects[5].description}
                    link={projects[5].link}
                />

            </div>
               
            


        </>

    )
}

export default Projects;