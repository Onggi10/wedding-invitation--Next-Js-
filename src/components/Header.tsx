// src/components/Header.tsx
'use client';

import { Box, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundImage: 'url("/img/wedding1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: '3.5rem',
        }}
      >
        Undangan Pernikahan
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: '2rem',
        }}
      >
        Onggi Sanjaya & Silvia Sari
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          href="#location"
        >
          Lihat Lokasi
        </Button>
        <Button
          variant="contained"
          color="primary"
        >
          Konfirmasi Kehadiran
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
