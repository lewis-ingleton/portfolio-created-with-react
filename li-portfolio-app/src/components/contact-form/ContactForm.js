import React from "react";

// CSS 
import './ContactForm.css'


function ContactForm() {
    return(
        <>
        <form>
            <h3>Enter your details and I'll get back to you</h3>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email address" />
            <textarea placeholder="Enter your message" cols="30" rows="5" />
            <button>Submit</button>
        </form>
        </>
    )
}


export default ContactForm;