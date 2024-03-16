import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

export default function TextView() {

  return (
      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Perbanyak Dokumen Anda!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Ingin mendapatkan manfaat penuh dari layanan kami?
            Tingkatkan ke paket premium sekarang dan nikmati fitur-fitur eksklusif yang tidak tersedia dalam paket.
          </Typography>

          <Button href="/" size="large" variant="contained" component={RouterLink} sx={{ marginTop: 3 }}>
            Upgrade
          </Button>
        </Box>
      </Container>
  );
}
