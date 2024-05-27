import React from 'react';
import { Paper, Typography, Chip, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Paper style={{ padding: 16 }}>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg"
        alt="Product"
        style={{ width: '100%' }}
      />
      <Typography variant="h6">Shark Ninja</Typography>
      <Typography variant="body2">
        Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System
      </Typography>
      <div style={{ marginTop: 16 }}>
        <Chip label="Pantry" />
        <Chip label="Obsolete" />
        <Chip label="Blender" />
        <Chip label="Lightning Deal" />
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
