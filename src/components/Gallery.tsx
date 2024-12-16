// src/components/Gallery.tsx
'use client';

import { Box, Grid, Typography } from '@mui/material';

const Gallery: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }} id="gallery">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Galeri
      </Typography>
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={`/img/slide/${index + 1}.jpg`}
              alt={`Foto ${index + 1}`}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
