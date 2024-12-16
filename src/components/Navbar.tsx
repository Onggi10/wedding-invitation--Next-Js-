// src/components/Navbar.tsx
'use client';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          O ❤️ S
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Tentang Kami</Button>
        <Button color="inherit">Detail Acara</Button>
        <Button color="inherit">Galeri</Button>
        <Button color="inherit">Lokasi</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
