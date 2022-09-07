import { useState,CompositionEvent,MouseEvent,ChangeEvent } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Typography, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Card} from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';
interface IForm {
  username: string;
  password: string;
  email: string;
  number: string;
  showPassword: boolean;
}
const SignupForm = () => {
  const [values, setValues] = useState<IForm>({
    username: '',
    password: '',
    email:'',
    number: '',
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
      <Card elevation={3} sx={{ display: 'flex',flexDirection:'column', padding:'1rem 4rem', justifyContent:'center', backgroundColor:'rgba(243, 244, 245,0.7)', width:'16rem',height:'35rem', margin:'2rem' }}>
        <Typography variant='h4' sx={{color:'#86a8e7', fontWeight:'900', textShadow:'0 3px 3px rgba(0,0,0,0.6)',padding:'1.3rem 0'}}>
          SIGN UP
        </Typography>
        <div style={{ display: 'flex',flexDirection:'column',alignItems:'center' }}>
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">UserName</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.username}
              onChange={handleChange('username')}
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
          <FormControl  fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.number}
              onChange={handleChange('number')}
              startAdornment={<InputAdornment position="start">+98</InputAdornment>}
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel htmlFor="outlined-Email">E-mail</InputLabel>
              <OutlinedInput
                id="outlined-Email"
                value={values.email}
                onChange={handleChange('email')}
                endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                label="E-mail"
              />
          </FormControl>
        </div>
        <Link to='/crypto' style={{textDecoration:'none', width:'100%', color:'#fff'}}>
          <Button 
          sx={{ background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)', color:'#fff', width:'100%', marginTop:'3rem', marginBottom:'0.5rem', padding:'0.7rem 1.5rem' }}
          onSubmit={handleSubmit}
          >
          SIGN UP
          </Button>
          </Link>
          <Typography variant='subtitle2' sx={{fontSize:'0.8rem'}}>
            Already Have an account? 
            <Link to='/signin' style={{color:'#7f7fd5', textDecoration:'none', fontSize:'0.8rem'}}> Sign In</Link>
          </Typography>
      </Card>
    </div>
  );
}
export default SignupForm;