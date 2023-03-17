import React, { useState } from 'react'
import { AppBar, Toolbar, Avatar, Typography, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material'
import logo from './li-headshot-2.png'
import DrawerComp from '../drawer/Drawer'
import './Navbar.css'


function Navbar(props) {
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
                                    <Tab onClick={() => props.setPage('Home')} label="Home" />
                                    <Tab onClick={() => props.setPage('Projects')} label="Projects" />
                                    <Tab onClick={() => props.setPage('Contact')} label="Contact" />
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