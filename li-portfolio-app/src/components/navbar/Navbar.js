import React from 'react'
import { AppBar, Toolbar, Avatar, Typography } from '@mui/material'
import logo from './li-pic-modified.jpg'
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Navbar = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#F1D302', color: '#242325'}}>
                <Toolbar>
                    <Avatar src={logo} sx={{ width: 56, height: 56 }}/>
                    <Typography>Lewis Ingleton</Typography>
                    <CodeIcon />
                    <Typography>Projects</Typography>
                    <ContactPageIcon />
                    <Typography>Contact me</Typography>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )


}

export default Navbar;