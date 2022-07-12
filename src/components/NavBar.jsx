import React, {useState} from 'react';
import {AppBar, Toolbar, Tab, Tabs, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: '#162B2C'}} position = 'sticky'>
          <Toolbar>
          <NavLink to= "/" style={{color: "white"}}>
          <Typography>Recipe <MenuBookIcon/> Seek</Typography></NavLink>
          <Tabs
            sx = {{ml : 'auto'}}
            textColor= 'inherit'
            indicatorColor = 'primary'
            value = {value}
            onChange = {(e, val) => setValue(val)}
          >
              <Tab LinkComponent={NavLink} to= '/recipes' label = 'All Recipes' />
              <Tab LinkComponent={NavLink} to= '/add' label = 'Add Recipe' />
          </Tabs>
          </Toolbar>
          </AppBar>
        </div>
  )
};

export default NavBar;