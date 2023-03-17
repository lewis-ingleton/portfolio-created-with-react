import React from "react";
import { NavLink } from 'react-router-dom';


function NotFound() {
    return (

        <div>
        <h2>Page not found</h2>
    
        <NavLink to='/'>
            <button>Return to Home</button>
        </NavLink>
        </div>
       
        
    )
}

export default NotFound;