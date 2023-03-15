import React, { useState } from "react";
import "./Drawer.css";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


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
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItemIcon>

                        <ListItemIcon>
                            <ListItemText>
                                Projects
                            </ListItemText>
                        </ListItemIcon>

                        <ListItemIcon>
                            <ListItemText>
                                Contact
                            </ListItemText>
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