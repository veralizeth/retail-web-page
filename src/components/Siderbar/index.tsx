import React from 'react';
import { Paper, Typography, Chip, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface SidebarProps {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
}

// It is always a good practice to pass the name of the props instead of just props.
const Sidebar: React.FC<SidebarProps> = ({ title, image, subtitle, tags }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <img src={image} alt="Product" style={{ width: '100%' }} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
      <div style={{ marginTop: 16 }}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            style={{ margin: 4, marginBottom: 4 }}
          />
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        <Link component={RouterLink} to="/" style={{ marginRight: 16 }}>
          Chart
        </Link>
        {/* <Link component={RouterLink} to="/table">
          Data Table
        </Link> */}
      </div>
    </Paper>
  );
};

export default Sidebar;
