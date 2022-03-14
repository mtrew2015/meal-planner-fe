import React from 'react';
import { Container} from './SideBar.styles';
import {Link} from 'react-router-dom';
import './SideBar.scss'

export default function SideBar() {
  return (
    <Container>
      <Link className={'linkStyle'} to="/">Home</Link>
      <Link className={'linkStyle'} to="recipes">Recipes</Link>
    </Container>
  );
}
