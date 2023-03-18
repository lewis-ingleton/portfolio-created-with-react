import React from "react";

import './Section2Column.css'


function TwoColumn(props) {


    return (
        <>
        <div className="twoColumn">
            <div className="col">{props.leftColumn}</div>
            <div className="col">{props.rightColumn}</div>

        </div>
        </>
    )

}
    
export default TwoColumn;