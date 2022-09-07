import { Input, Grid, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import './weather.css';

const api={
    key: "9f10ca46d9e3c56f3848895163f2540d",
    base:"https://api.openweathermap.org/data/2.5/"
}

const dateBuilder = (d:any) => {
    let months = ["January", "Fabruary", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"]; 
    let days = ["Sunday", "Monday", "Tuesday" , "Wednesday", "Thurseday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year =d.getFullYear();
    return (`${day} ${date} ${month} ${year}`)
}
// interface IWeather {
//     weather:{
//         name:string;
//         sys:{
//             country:string;
//         }
//         main:{ 
//             temp:number;
//             temp_max:number;
//             feels_like: string;
//         };
//         wind:{
//             speed: number;
//         }
//     }
// }

const Weather = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState<any>({});
    const search = (e:any) =>{
        if(e.key === "Enter"){
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
              setQuery("")
              setWeather(result)
              console.log(result)
            })
        }
    }
    return ( 
        <Grid item container className={(typeof weather.main != "undefined")? ((weather.main.temp > 16) ? "warm" : "weather-app") : "weather-app"}>
            <Grid item>
                <AppBar position='static' sx={{minWidth:'100vw', background:'linear-gradient(to left, #feac5e, #c779d0, #4bc0c8)'}}>
                    <Toolbar sx={{diplay:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Typography variant='h6' sx={{textShadow:'3px 3px rgba(0,0,0,0.2)', marginLeft:'0.5rem', display:'flex', flexDirection:'row'}}>
                            Weather's Conditions
                        </Typography>
                        <Typography>
                            <IconButton>
                                <Link to="/crypto">
                                    <HomeIcon sx={{color:'#fff', margin:'0 1rem'}}/>
                                </Link>
                            </IconButton>
                            <IconButton>
                                <NotificationsIcon sx={{color:'#fff', margin:'0 1rem'}}/>
                            </IconButton>
                            <IconButton>
                                <LocalPostOfficeIcon sx={{color:'#fff', margin:'0 1rem'}}/>
                            </IconButton>
                        </Typography> 
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item sx={{ height: '100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <Grid item sx={{ width: '20rem'}}>
                    <Typography sx={{margin:'2rem 0 0 0.5rem', color:"#c779d0", textShadow:'1px 1px rgba(0,0,0,0.2)', fontWeight:'700'}}>
                        Enter your city
                        <Input
                            type ="text"
                            placeholder ="Search ..."
                            onChange = {e => setQuery(e.target.value)}
                            value = {query}
                            onKeyPress = {search}
                            sx={{ display: 'block',width: '100%',padding: '0.5rem 2rem 0.5rem 1rem',appearance: 'none',background: 'none',color: '#313131',boxShadow: '0 5px rgba(0,0,0,0.2)',borderRadius: '0.3rem',backgroundColor: 'rgba(255,255, 255, 0.5)',marginTop: '0.2rem', marginBottom:'3rem',fontSize: '1.5rem',transition: '0.4s ease'}}
                        />
                    </Typography>
                </Grid>
                {(typeof weather.main != "undefined") ? (
                <Grid item>
                    <Grid item>
                        <Typography sx={{ color: '#fff',fontSize: '35px',fontWeight: '700',textAlign: 'center',textShadow: '3px 3px rgba(50, 50, 70, 0.5)',marginBottom: '1rem'}}>{weather.name},{weather.sys.country}</Typography>
                        <Typography sx={{ color: '#fff',fontSize: '20px',fontWeight: '500',fontStyle: 'italic',textAlign: 'center',textShadow: '2px 2px rgba(50, 50, 70, 0.5)'}}>{dateBuilder(new Date())}</Typography>
                    </Grid>
                    <Grid item sx={{ textAlign: 'center'}}>
                        <Typography sx={{position: 'relative',display: 'inline-block',color: '#fff',margin: '1.5rem auto',backgroundColor: 'rgba(255, 255, 255, 0.2)',borderRadius: '0.3rem',padding: '1rem 2rem',fontSize: '4rem',fontWeight: '900',textShadow: '3px 6px rgba(50, 50, 70, 0.5)',textAlign: 'center',boxShadow: '3px 6px rgba(0,0,0,0.2)'}}>{Math.round(weather.main.temp)} °c</Typography>
                        <Typography sx={{color: '#fff',fontSize: '2.5rem',fontWeight: '700',textShadow: '3px 3px rgba(50, 50, 70, 0.5)'}}>{weather.weather[0].main}</Typography>
                    </Grid>
                    <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Typography variant='h6' sx={{borderRadius:'0.3rem',margin:'1rem', padding:'0.5rem 1rem', backgroundColor:'rgba(255,255,255,0.3)', color:'#fff',textShadow: '2px 2px rgba(50, 50, 70, 0.5)', fontWeight:'700'}}>Max Tempreture:{weather.main.temp_max}</Typography>
                        <Typography variant='h6'sx={{borderRadius:'0.3rem',margin:'1rem', padding:'0.5rem 1rem', backgroundColor:'rgba(255,255,255,0.3)', color:'#fff',textShadow: '2px 2px rgba(50, 50, 70, 0.5)', fontWeight:'700'}}>Wind Speed: {weather.wind.speed}</Typography>
                        <Typography variant='h6'sx={{borderRadius:'0.3rem',margin:'1rem', padding:'0.5rem 1rem', backgroundColor:'rgba(255,255,255,0.3)', color:'#fff',textShadow: '2px 2px rgba(50, 50, 70, 0.5)', fontWeight:'700'}}>Feels Like:{weather.main.feels_like}</Typography>
                    </Grid>
                </Grid>
                ):('')}
            </Grid>
        </Grid>
    );
}
export default Weather;