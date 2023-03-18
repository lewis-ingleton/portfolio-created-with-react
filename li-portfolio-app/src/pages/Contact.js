
import React from "react";

// Components 
import SmallHeader from "../components/small-header/SmallHeader";
import ContactForm from "../components/contact-form/ContactForm";
import Section2Columns from "../components/section-2-column/Section2Column";
import ContactList from "../components/contact-list/ContactList";


function Contact() {
    const title = 'Contact me'
    const subTitle = `You'll find me on the usual web channels, like GitHub and LinkedIn. I've added links to both of my pages below. You'll also find a link to download my latest CV - as well as a contact form if you want to contact me directly. Otherwise, feel free to call or email me!`
    const rightColumn = <ContactForm />
    const leftColumn = <ContactList />
    

    return (
        <>
        <SmallHeader title={title} subTitle={subTitle}/>
        <Section2Columns rightColumn={rightColumn} leftColumn={leftColumn}>

        </Section2Columns>
        </>
        
    )

}


export default Contact;