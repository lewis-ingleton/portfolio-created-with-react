import React from "react";

import './ContactList.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ContactList() {
    return (
        <>
            <h3>View my profiles and CV</h3>
            <ul>
                <li>
                    <a href="https://github.com/lewis-ingleton" target="blank">GitHub profile </a><OpenInNewIcon fontSize="inherit" />
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lewis-ingleton/" target="blank">LinkedIn profile </a><OpenInNewIcon fontSize="inherit" />
                </li>
                <li>
                    <a href="mailto:lewis.ingleton1@gmail.com" target="blank">Email </a><OpenInNewIcon fontSize="inherit" />
                </li>
                <li>
                    <a href="https://pdfhost.io/v/c.DOKTDlj_Lewis_Ingleton_CV_2023_inc_front_end" target="blank">Download my CV </a><OpenInNewIcon fontSize="inherit" />
                </li>

            </ul>
        </>

    )
}

export default ContactList;