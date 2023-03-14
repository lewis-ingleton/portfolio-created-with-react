import React from 'react'
import { AppBar, Toolbar, Avatar, Typography } from '@mui/material'
import logo from './li-pic-modified.jpg'

const Navbar = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Avatar src={logo} sx={{ width: 56, height: 56 }} />
                    <Typography>Lewis Ingleton</Typography>

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )


}

export default Navbar;