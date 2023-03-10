import React, { FC } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import FooterDescription from '../molecules/FooterDescription';
import SocialMediaIcons from '../molecules/SocialMediaIcons';
import useStyles from '../atoms/AtomicStyles';

const Footer: FC = () => {
  const styles = useStyles();
  return (
    <Container maxWidth="xl" className={styles.footer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <FooterDescription />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }}
          display="flex"
          flexDirection="column-reverse"
          justifyContent="center"
        >
          <Grid item display="flex" flexDirection="row" justifyContent="center">
            <Copyright />
            <Typography>2023 E-Commerce Application</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
          }}
        >
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
