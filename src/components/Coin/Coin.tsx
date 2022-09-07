import { Table, TableRow, TableCell,Typography, TableBody, Avatar } from '@mui/material';

const Coin = ({image, name, symbol, current_price, total_volume, price_change_percentage_24h, market_cap}:any) => {
  return (
    <>
    <Table>
        <TableBody>
        <TableRow sx={{ display: 'flex',flexDirection: 'row',justifyItems: 'start',alignItems: 'center',height: '80px',borderBottom: '1px solid #d7d7d7'}}>
            <TableCell sx={{display:'flex',flexDirection:'row', borderBottom:'none',alignItems: 'center',paddingRight: '2.4rem',minWidth: '16rem'}} align='center'>
                <Avatar src={image} alt='crypto' sx={{height: '1.7rem',width: '1.7rem', marginRight:'0.7rem'}}/>
                <Typography variant='h6' fontSize='1.1rem'>{name}</Typography>
            </TableCell>
            <TableCell align='center' sx={{borderBottom:'none',minWidth: '10rem'}}>  
                <Typography  variant='subtitle2'  sx={{  textTransform: 'uppercase'}} >{symbol}</Typography>
            </TableCell>
            <TableCell className='coin-data' align='center' sx={{borderBottom:'none',minWidth: '10rem'}}>
                <Typography variant='subtitle2'>${current_price}</Typography>
            </TableCell>
            <TableCell align='center' sx={{borderBottom:'none',minWidth: '10rem'}}>
                <Typography variant='subtitle2'>${total_volume.toLocaleString()}</Typography>
            </TableCell>
            <TableCell align='center' sx={{borderBottom:'none',minWidth: '10rem'}}>
                {price_change_percentage_24h < 0 ? (
                    <Typography sx={{color:'#f00606'}} variant='subtitle2'>{price_change_percentage_24h.toFixed(2)}%</Typography>
                    ) : (
                    <Typography sx={{ color: '#11d811'}} variant='subtitle2'>{price_change_percentage_24h.toFixed(2)}%</Typography>
                    )
                }
            </TableCell>
            <TableCell align='center' sx={{borderBottom:'none',minWidth: '10rem'}}>
                <Typography variant='subtitle2'> 
                ${(market_cap).toLocaleString()}
                </Typography>
            </TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </>
  )
}

export default Coin;