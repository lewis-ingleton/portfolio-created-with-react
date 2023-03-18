import React from "react";
import { useState } from "react";

// CSS 
import './ContactForm.css'

// Success style
const styles = {
    success: {
        textAlign: 'center',
        color: 'green',
        marginTop: '20px'
    }
}

function ContactForm() {
    const [success, setSucces] = useState(false)
    const [formData, setFormData] = useState({
        access_key: 'ad107343-6983-43ae-9de7-193bbeb89b0a'

    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        const data = JSON.stringify(formData);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .then(data => {
                setSucces(true);
                setFormData({
                    ...formData,
                    userName: '',
                    userEmail: '',
                    userMessage: '',
                })
                setTimeout(() => {
                    setSucces(false);
                }, 5000);
            })
            .catch(err => console.log(err))


    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <h3>Enter your details if you want to contact me</h3>
                <input
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                />
                <input
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your email address"
                />
                <textarea
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    cols="30" rows="5"
                />
                <button>Submit</button>
            </form>
            {success && <p style={styles.success}>Form submitted successfully!</p>}
        </>
    )
}


export default ContactForm;