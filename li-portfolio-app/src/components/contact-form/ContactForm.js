import React from "react";

// CSS 
import './ContactForm.css'


function ContactForm() {
    return(
        <>
        <form>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email address" />
            <textarea placeholder="Enter your message" cols="30" rows="5" />
            <button>Submit</button>
        </form>
        
        
        </>
    )
}


export default ContactForm;