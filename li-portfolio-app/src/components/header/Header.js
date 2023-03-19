
import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <React.Fragment>
            <div className="hero">
                <div className="headerWrapper">
                <h1>{props.title}</h1>
                <sub>{props.subTitle}</sub>
                <p>{props.intro}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;