import React from 'react';
import { NavContainer } from './NavBar.styles';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
    <NavContainer>
      <MenuIcon fontSize='large' />
      <div>
        <h1>Meal Planner</h1>
      </div>
      <div></div>
    </NavContainer>
  );
};
