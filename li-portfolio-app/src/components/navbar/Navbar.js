// Imports
import React, { useState } from 'react'
import { AppBar, Toolbar, Avatar, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material'
import { NavLink } from 'react-router-dom';

// components and assets
import logo from './li-headshot-2.png'
import DrawerComp from '../drawer/Drawer'
import './Navbar.css'


function Navbar() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const mediaSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#F1D302', color: '#242325' }}>
                <Toolbar className='toolbar'>
                    {
                        mediaSM ? (
                            <>
                                <Avatar className='avatarStyle' src={logo} sx={{ width: 56, height: 56 }} />
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Avatar className='avatarStyle' src={logo} sx={{ width: 56, height: 56 }} />
                                <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='primary'>
                                    <NavLink className='NavLinks' to='/portfolio-created-with-react/'><Tab label="Home" /></NavLink>
                                    <NavLink className='NavLinks' to='/projects/'><Tab label="Projects" /></NavLink>
                                    <NavLink className='NavLinks' to='/contact/'><Tab label="Contact" /></NavLink>
                                </Tabs>
                            </>

                        )

                    }



                </Toolbar>


            </AppBar>
        </React.Fragment>
    )


}

export default Navbar;