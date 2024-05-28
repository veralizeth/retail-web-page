import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from './Logo/index';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

//#052849
