import React, { FC } from 'react';
import {
  Container,
  Box,
  CssBaseline,
  Avatar,
  TextField,
  Typography,
  Grid,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import useStyles from '../atoms/AtomicStyles';

const Form: FC = () => {
  const styles = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={styles.form}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#677880' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          // onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: '#677880' }}
          // onClick={handleLogin}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
