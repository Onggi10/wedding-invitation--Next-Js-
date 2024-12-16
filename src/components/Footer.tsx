// src/components/Footer.tsx
'use client';

import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Undangan Pernikahan. Onggi Sanjaya & Silvia Sari
      </Typography>
    </Box>
  );
};

export default Footer;
