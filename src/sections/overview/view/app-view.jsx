import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppWidgetSummary from '../app-widget-summary';
import AppText from '../app-text';
// import AppCurrentVisits from '../app-current-visits';

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Menunggu"
            total={1}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_time.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Tertunda"
            total={2}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_schedule.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Draft"
            total={0}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_draft.png.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ditandatangani"
            total={1}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_ditandatangani.png" />}
          />
        </Grid>

        <AppText/>
      </Grid>
    </Container>
  );  
}
