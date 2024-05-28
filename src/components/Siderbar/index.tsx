import React from 'react';
import { Paper, Typography, Chip, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './index.scss';

interface SidebarProps {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
}

// It is always a good practice to pass the name of the props instead of just props.
const Sidebar: React.FC<SidebarProps> = ({ title, image, subtitle, tags }) => {
  return (
    <Paper className="paper-container">
      <img src={image} alt="Product" className="product-image" />
      <Typography className="product-title" variant="h6">{title}</Typography>
      <Typography className="product-subtitle" variant="body2">{subtitle}</Typography>
      <div className="chip-container">
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} className="chip-item" />
        ))}
      </div>
    </Paper>
  );
};

export default Sidebar;
