import React from "react";

// CSS
import './SmallHeader.css'



function SmallHeader(props) {
    return (
        <>
            <div className="smallHeader">
                <div className="flex">
                    <h1>{props.title}</h1>
                    <p>{props.subTitle}</p>
                </div>

            </div>
        </>


    )
}

export default SmallHeader;