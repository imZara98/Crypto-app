import * as React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import Coin from './Coin';
import { Input,Grid, Typography,Table, TableCell,TableRow,TableBody, FormControl, TableHead } from '@mui/material';
import NewHead from '../NewHead';

export interface ICoin{
    id:number;
    name:string;
    image: string;
    symbol:string;
    current_price: string;
    market_cap: string;
    price_change_percentage_24h: number;
    total_volume: string;
}
const Crypto = () => {
    const [search,setSearch] = React.useState<string>('');
    async function fetchPosts() {
        const {data} = await
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        return data;
    }
    const {data, isError, isLoading} = useQuery("posts", fetchPosts);
    if (isLoading) { return <div style={{fontSize:'2rem', fontWeight:'500', color:'#c779d0'}}>Loading ... </div>}
    if (isError) { return <div>Error! ...</div>}
    const filteredCoins:ICoin[] = data.filter((coin: ICoin) => coin.name.toLowerCase().includes(search.toLowerCase()));
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        return setSearch(e.target.value)
    };
    return ( 
        <Grid item sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',color: '#fff', overflow:'scroll' }} >
            <NewHead />
            <Grid item sx={{marginBottom: '5rem',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                <Typography  variant= 'h5' component= 'h1' sx={{ marginBottom: '1rem',textAlign: 'center', color:'#c779d0', fontWeight:'700'}}>Search Currency</Typography>
                <FormControl>
                    <Input
                    type='text' 
                    placeholder='Search ...' 
                    onChange={handleChange}
                    sx={{ paddingLeft: '1.4rem',width: '20rem',height: '4rem',borderRadius: '0.4rem',border: 'none',background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',color: '#e2e2e2'}}
                    />
                </FormControl>
            </Grid>
            <Grid item sx={{margin:'0 2rem'}}>
            <Table>
                <TableHead>
                    <TableRow sx={{display:'flex',justifyContent:'space-between', borderBottom:'1px solid #c779d0', color:'#34dsr5'}}>
                        <TableCell sx={{minWidth: '14rem', color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>COMPANIES</TableCell>
                        <TableCell  sx={{color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>SYMBOL</TableCell>
                        <TableCell  sx={{color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>PRICE</TableCell>
                        <TableCell  sx={{color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>VOLUME</TableCell>
                        <TableCell  sx={{color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>CHANGES</TableCell>
                        <TableCell sx={{marginRight:'0.5rem', color:'#c779d0',fontWeight:'500', borderBottom:'none'}}>MARKET CAP</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredCoins.map((coin: ICoin) => {
                        return(
                            <Coin key= {coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} current_price ={coin.current_price} market_cap={coin.market_cap} price_change_percentage_24h = {coin.price_change_percentage_24h} total_volume={coin.total_volume}/>
                        )
                    })}
                </TableBody>
            </Table>
            </Grid>
            
        </Grid>
     );
}
export default Crypto;