import { Grid } from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Crypto from './components/Coin/Crypto';
import './App.css';
import SigninForm from './components/SigninForm';
import Weather from './components/Weather';
import Calculator from './components/Calculator';
import AppUser from './components/AddFriends/AppUser';

const App = () => {
  return(
    <div >
      <Grid item >
        <Routes>
          <Route path = '/' element = {<SignupForm/>}/>
          <Route path='crypto' element={<Crypto />} />
          <Route path = 'signin' element={<SigninForm/>}/>
          <Route path = 'weather' element = {<Weather/>}/>
          <Route path= 'appuser' element = {<AppUser/>} />
          <Route path='calculator' element = {<Calculator/>}/>
        </Routes>
      </Grid>
    </div>
  )
}
export default App;