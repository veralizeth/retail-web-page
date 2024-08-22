import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from './Logo/index';
import './index.scss';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="header">
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;


