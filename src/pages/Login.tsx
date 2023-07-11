import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller,  SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { AlertProps, IconButton, InputAdornment, Snackbar } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, VpnKeyOffOutlined } from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert'
import React from 'react';
import useAuthentication from '../hooks/useAuthentication';
import { ICredential } from '../interfaces/ICredentials';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.geotechinfo.net/">
        Geotech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Login() {
  // Add these variables to your component to track the state
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  // AUthenticate User Handle
  const { handleSubmit, control, formState: { errors } } = useForm<ICredential>({
    defaultValues: {
      email: "",
      password : ""
    }
  });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false); 
  };

  // const[searchParams] = useSearchParams();
  const {login} = useAuthentication();
  const onSubmit: SubmitHandler<ICredential> = (data) => {
    try{
     login(data);
    }catch(e : any){
      setOpen(true)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={handleSubmit(onSubmit)} className='form' id='LoginForm'>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="div" sx={{ mt: 1 }}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Enter valid Email', pattern: /[a-z0-9]+@geotechinfo.net/
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    onChange={(e) => field.onChange((e.target.value))}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    //autoFocus
                    error={!!errors.email}
                    helperText={errors.email && 'Please Enter valid Email'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Enter valid password', minLength: 6, pattern: /^(?=.{7,})([a-z\d])[a-z\d]*(?!\1)([a-z\d])[a-z\d]*(?!\1|\2)([a-z\d])[a-z\d]*(?!\1|\2|\3)([a-z\d])[a-z\d]*(?!\1|\2|\3|\4)([a-z\d])[a-z\d]*$/m
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password && "Please enter valid password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKeyOffOutlined />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{ display: 'flex', justifyContent: 'flex-start' }}
                label="Remember me"
              />
            </Box>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
        </form>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Please Enter valid Email & Password!
        </Alert>
      </Snackbar>
      </Container>
    </ThemeProvider>
  );
}