import React from "react";

import './Section2Column.css'

import ContactForm from "../contact-form/ContactForm";

function TwoColumn() {


    return (
        <>
        <div className="twoColumn">
            <div className="col"></div>
            <div className="col"><ContactForm /></div>

        </div>
        </>
    )

}
    
export default TwoColumn;