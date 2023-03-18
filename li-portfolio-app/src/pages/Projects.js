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
                    info={projects[0].info}
                    description={projects[0].description}
                    repoLink={projects[0].repoLink}
                    liveLink={projects[0].liveLink}

                />
                <ProjectCard
                    title={projects[1].title}
                    image={projects[1].image}
                    info={projects[1].info}
                    description={projects[1].description}
                    repoLink={projects[1].repoLink}
                    
                />
                <ProjectCard
                    title={projects[2].title}
                    image={projects[2].image}
                    info={projects[2].info}
                    description={projects[2].description}
                    repoLink={projects[2].repoLink}
                    liveLink={projects[2].liveLink}
                />
                <ProjectCard
                    title={projects[3].title}
                    image={projects[3].image}
                    info={projects[3].info}
                    description={projects[3].description}
                    repoLink={projects[3].repoLink}
                    liveLink={projects[3].liveLink}
                />
                <ProjectCard
                    title={projects[4].title}
                    image={projects[4].image}
                    description={projects[4].description}
                    info={projects[4].info}
                    repoLink={projects[4].repoLink}
                    liveLink={projects[4].liveLink}
                />
                <ProjectCard
                    title={projects[5].title}
                    image={projects[5].image}
                    info={projects[5].info}
                    description={projects[5].description}
                    repoLink={projects[5].repoLink}
                    liveLink={projects[5].liveLink}
                />

            </div>
            



        </>

    )
}

export default Projects;