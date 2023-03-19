import React, { useState } from "react";
import "./Drawer.css";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'


function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer anchor='right' open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItemButton className="list">
                        <ListItemIcon>
                            <NavLink className='NavLinks' to='/portfolio-created-with-react/'>
                            <ListItemText >
                                Home
                            </ListItemText>
                            </NavLink>
                            
                        </ListItemIcon>
                        </ListItemButton>

                    <ListItemButton className="list">
                        <ListItemIcon>
                        <NavLink className='NavLinks' to='/projects/'>
                            <ListItemText>
                                Projects
                            </ListItemText>
                            </NavLink>
                        </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton className="list">
                        <ListItemIcon>
                        <NavLink className='NavLinks' to='/contact/'>
                            <ListItemText>
                                Contact
                            </ListItemText>
                            </NavLink>
                        </ListItemIcon>

                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )

}


export default DrawerComp;