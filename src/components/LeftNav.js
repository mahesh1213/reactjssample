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
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/contextapi"} >
                Context Api
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/errorboundaries"} >
            Error Boundaries
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/hoc"} >
            Higher order
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/resclass"} >
            Refs 
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/forwardref"} >
            Forword Refs 
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items-seperater'>
             Hooks
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/stateandeffect"} >
            UseState  UseEffect
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/apitcalling"} >
             Api calling
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/routingreact"} >
             Routing in react
            </ListItemButton>
          </ListItem>
          <ListItem className='left-menu-items'>
            <ListItemButton component={NavLink}  to={"/reactredux"} >
             React Redux
            </ListItemButton>
          </ListItem>
        </List>
    </div>
  )
}

export default LeftNav
