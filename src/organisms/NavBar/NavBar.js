import React, { useState } from 'react';
import { NavContainer } from './NavBar.styles';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../SideBar/SideBar';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <MenuIcon onClick={() => setOpen(true)} fontSize='large' />
      <div>
        <h1>Meal Planner</h1>
      </div>
      <div>
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
          <SideBar />
        </Drawer>
      </div>
    </NavContainer>
  );
};
