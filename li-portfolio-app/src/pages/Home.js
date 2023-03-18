import React from "react";
import Header from "../components/header/Header";

function Home() {
    const title = 'Lewis Ingleton'
    const subTitle = 'My front end developer portfolio'
    const intro = `I'm in the first stages in my journey to become a front end developer.`
    return (
        <>
        <Header title={title} subTitle={subTitle} intro={intro}/>
        </>

    )
}

export default Home;