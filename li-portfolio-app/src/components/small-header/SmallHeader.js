import React from "react";

// CSS
import './SmallHeader.css'

function SmallHeader(props) {
    return (
        <>
            <div className="smallHeader">
                <h1>{props.title}</h1>
            </div>
        </>


    )
}

export default SmallHeader;