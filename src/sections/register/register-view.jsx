import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function RegisterView() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errorState, setErrorState] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.password || !formData.password_confirmation) {
        setErrorState('All fields are required');
        return;
      }
      if (formData.password.length < 8) {
        setErrorState('Password must be at least 8 characters long');
        return;
      }
      if (formData.password !== formData.password_confirmation) {
        setErrorState('Password and confirm password must match');
        return;
      }
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Account successfully created. Please login.');
        setFormData({
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        });
        setErrorState('');
      } else {
        setErrorState(data.error);
      }
    } catch (err) {
      setErrorState('Error occurred. Please try again later.');
    }
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>Sign up</Typography>
          {errorState && (
            <Typography variant="body2" color="error" sx={{ mt: 1, mb: 2 }}>
              {errorState}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="body2" color="success" sx={{ mt: 1, mb: 2 }}>
              {successMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField name="name" label="Name" value={formData.name} onChange={handleChange} />
              <TextField name="email" label="Email address" value={formData.email} onChange={handleChange} />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                value={formData.password_confirmation}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
              <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit">
                Sign Up
              </LoadingButton>
            </Stack>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Sign in
            </Link>
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}