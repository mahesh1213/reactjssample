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
        </List>
    </div>
  )
}

export default LeftNav
