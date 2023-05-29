import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from 'react-router-dom';

function LeftNav() {
  return (
    <div>
        <List>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/home"} >
                Home
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items-seperater'>
             Class
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/classstatecomponent"} >
                Using State
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/lifecycles"} >
                Life Cycle's
            </ListItemButton>
          </ListItem>
        </List>
    </div>
  )
}

export default LeftNav
