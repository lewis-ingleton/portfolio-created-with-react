// Link to github 
// link to linkedin
// show email 
// link to download CV in pdf
// Contact form for handling events

import React from "react";

// Components 
import SmallHeader from "../components/small-header/SmallHeader";
import ContactForm from "../components/contact-form/ContactForm";



function Contact() {
    const title = 'Contact me'
    const subTitle = `You'll find me on the usual web channels, like GitHub and LinkedIn. I've added links to both of my pages below. You'll also find a link to download my latest CV - as well as a contact form if you want to contact me directly. Otherwise, feel free to call or email me!`
    return (
        <>
        <SmallHeader title={title} subTitle={subTitle}/>
        <ContactForm></ContactForm>
        </>
        
    )

}


export default Contact;