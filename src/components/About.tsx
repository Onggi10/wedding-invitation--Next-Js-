// src/components/About.tsx
'use client';

import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f8f9fa' }} id="about">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Tentang Kami
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/img/meet.svg"
              alt="Kisah Kami"
            />
            <CardContent>
              <Typography variant="h5">Kisah Kami</Typography>
              <Typography>
                Semua bermula dari pertemuan sederhana di{' '}
                <strong>[lokasi pertemuan pertama]</strong>. Seiring waktu, kami
                semakin mengenal dan saling memahami.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/img/message.svg"
              alt="Ucapan Terima Kasih"
            />
            <CardContent>
              <Typography variant="h5">Ucapan Terima Kasih</Typography>
              <Typography>
                Kami merasa sangat bersyukur atas dukungan dari keluarga dan
                teman-teman tercinta.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/img/merried.svg"
              alt="Harapan Kami"
            />
            <CardContent>
              <Typography variant="h5">Harapan Kami</Typography>
              <Typography>
                Dengan doa restu Anda, kami berharap pernikahan ini menjadi
                awal perjalanan penuh kebahagiaan.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
