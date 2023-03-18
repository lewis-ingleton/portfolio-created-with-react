import React from "react";
import Header from "../components/header/Header";

function Home() {
    const title = 'Lewis Ingleton'
    const subTitle = 'My front end developer portfolio'
    const intro = `I'm in the early stages of my journey to become a front end developer. This mini site showcases the projects I've worked on and you can also find my contact details on the Contact page.`
    return (
        <>
        <Header title={title} subTitle={subTitle} intro={intro}>
       

        </Header>
        
    
        
        </>

    )
}

export default Home;