import { Card, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Button, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, CompositionEvent, ChangeEvent, MouseEvent } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

interface IForm {
  userName: string;
  password: string;
  showPassword: boolean;
}

export default function SigninForm() {
  const [values, setValues] = useState<IForm>({
    userName: '',
    password: '',
    showPassword: false,
  });
  const handleSubmit = ( event: CompositionEvent<HTMLButtonElement> ) => {
    event.preventDefault();
  }
  const handleChange =
    (prop: keyof IForm) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='App'>
      <Card sx={{ display: 'flex', flexWrap: 'wrap', padding:'1rem 4rem', justifyContent:'center', width:'16rem',height:'35rem',backgroundColor:'rgba(243, 244, 245,0.7)', margin:'2rem'}}>
        <Typography variant='h4' sx={{color:' #ef32d9', fontWeight:'900', textShadow:'0 3px 3px rgba(0,0,0,0.6)',padding:'1.3rem 0 2rem 0'}}>
          SIGN IN
        </Typography>
        <div style={{ display: 'flex',flexDirection:'column',alignItems:'center' }}>
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">UserName</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.userName}
              onChange={handleChange('userName')}
              label="UserName"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 2 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'password' : 'text'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Link to='/crypto' style={{textDecoration:'none', width:'100%', color:'#fff'}}>
          <Button 
          sx={{ background: 'linear-gradient(to right, #ef32d9, #89fffd)', color:'#fff', width:'100%', marginTop:'3rem', marginBottom:'0.5rem', padding:'0.7rem 1.5rem' }}
          onSubmit={handleSubmit}
          >
          SIGN IN
          </Button>
        </Link>
          <Typography variant='subtitle2' sx={{fontSize:'0.8rem'}}>
            Don't have an account? 
            <Link to='/' style={{color:'#7f7fd5', textDecoration:'none', fontSize:'0.8rem'}}> Sign UP</Link>
          </Typography>
      </Card>
    </div>
  );
}