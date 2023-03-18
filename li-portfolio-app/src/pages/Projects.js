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
                    repoLink={projects[0].repoLink}
                    liveLink={projects[0].liveLink}

                />
                <ProjectCard
                    title={projects[1].title}
                    image={projects[1].image}
                    description={projects[1].description}
                    repoLink={projects[1].repoLink}
                    liveLink={projects[1].liveLink}
                />
                <ProjectCard
                    title={projects[2].title}
                    image={projects[2].image}
                    description={projects[2].description}
                    repoLink={projects[2].repoLink}
                    liveLink={projects[2].liveLink}
                />
                <ProjectCard
                    title={projects[3].title}
                    image={projects[3].image}
                    description={projects[3].description}
                    repoLink={projects[3].repoLink}
                    liveLink={projects[3].liveLink}
                />
                <ProjectCard
                    title={projects[4].title}
                    image={projects[4].image}
                    description={projects[4].description}
                    repoLink={projects[4].repoLink}
                    liveLink={projects[4].liveLink}
                />
                <ProjectCard
                    title={projects[5].title}
                    image={projects[5].image}
                    description={projects[5].description}
                    repoLink={projects[5].repoLink}
                    liveLink={projects[5].liveLink}
                />

            </div>




        </>

    )
}

export default Projects;