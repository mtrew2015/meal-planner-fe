import React, { useState } from 'react';
import { NavContainer } from './NavBar.styles';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SideBar from '../SideBar/SideBar';
import './NavBar.scss';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <MenuIcon onClick={() => setOpen(true)} fontSize='large' />
      <div className='justifyCenter'>
        <RestaurantIcon fontSize='large' />
      </div>
      <div>
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
          <SideBar />
        </Drawer>
      </div>
    </NavContainer>
  );
};
