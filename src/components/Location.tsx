// src/components/Location.tsx
'use client';

import { Box, Typography } from '@mui/material';

const Location: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }} id="location">
      <Typography variant="h4" gutterBottom>
        Lokasi
      </Typography>
      <iframe
        src="https://maps.google.com/maps?q=-6.6038027,106.8020603&hl=en&z=14&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map Location"
      ></iframe>
    </Box>
  );
};

export default Location;
