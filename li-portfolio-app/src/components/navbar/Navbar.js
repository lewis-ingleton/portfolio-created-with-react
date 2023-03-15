import React,{useState} from 'react'
import { AppBar, Toolbar, Avatar, Typography, Tabs, Tab} from '@mui/material'
import logo from './li-headshot-2.jpeg'


const Navbar = () => {
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{ background: '#F1D302', color: '#242325'}}>
                <Toolbar>
                    <Avatar src={logo} sx={{ width: 56, height: 56 }}/>
                    <Tabs textColor='inherit' value={value} onChange={(e,value) => setValue(value)} indicatorColor='#EFB0A1'>
                        <Tab label="Lewis Ingleton" />
                        <Tab label="Projects"/>
                        <Tab label="Contact"/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )


}

export default Navbar;