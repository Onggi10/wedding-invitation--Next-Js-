// src/components/EventDetails.tsx
'use client';

import { Box, Typography, List, ListItem } from '@mui/material';

const EventDetails: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }} id="event">
      <Typography variant="h4" gutterBottom>
        Detail Acara
      </Typography>
      <List>
        <ListItem>📅 Tanggal: 12 Desember 2024</ListItem>
        <ListItem>⏰ Waktu: 10:00 - 14:00</ListItem>
        <ListItem>📍 Lokasi: Gedung Serba Guna</ListItem>
      </List>
    </Box>
  );
};

export default EventDetails;
