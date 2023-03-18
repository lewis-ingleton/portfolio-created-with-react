import React  from "react";

import './ContactList.css'

function ContactList() {
    return (
        <>
         <h3>View my profiles and CV</h3>
            <ul>
                <li>
                    <a href="https://github.com/lewis-ingleton" target="blank">GitHub profile</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lewis-ingleton/" target="blank">LinkedIn profile</a>
                </li>
                <li>
                    <a href="mailto:lewis.ingleton1@gmail.com" target="blank">lewis.ingleton1@gmail.com</a>
                </li>
                <li>
                    <a href="#" target="blank">Download my CV</a>
                </li>

            </ul>
        </>

    )
}

export default ContactList;