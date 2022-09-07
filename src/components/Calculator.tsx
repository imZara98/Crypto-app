import { useState } from 'react';
import { Grid, Card, Button, Typography } from "@mui/material";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const ops = ["/", "*", "+", "-", "."];
    const updateCalc = (value:string):void=> {
        if (
            (ops.includes(value) && calc ) ===" " || (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);
        if(!(ops.includes(value))){
            setResult(eval(calc+value).toString())
        }
    }
    const createDigits = () => {
        const digits = [];
        for(let i = 1; i < 10 ; i++) {
            digits.push(
                <Button 
                key={i} 
                onClick={() => updateCalc(i.toString())}
                sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 33.333%',maxWidth: '33.333%',backgroundColor:'#ce93d8'}}
                >
                {i}
                </Button>
            )
        }
        return digits;
    }
    const calculate = () => {
        setCalc(eval(calc).toString())
    }
    // this function for delete token by token
    // const deleteLast = () => {
        
    //     if (calc === " "){
    //         return;
    //     }
    //     const value = calc.slice(0, -1)
    //     setCalc(value)
    // }
    const resetClick = () => {
        setResult("");
        setCalc("");
    }

    return ( 
        <Grid item sx={{display: 'flex',minHeight: '100vh', justifyContent:'center', alignItems:'center'}}>
            <Card elevation={3} sx={{ width: '100%',height:'34rem', backgroundColor:'#ea80fc', maxWidth: '28rem', borderRadius: '0.8rem',overflow: 'hidden', boxShadow: '0 2px 64px rgba(0, 0, 0, 0.2)'}}>
                <Typography sx={{padding: '1.6rem',textAlign: 'right',backgroundColor:'#212121',color: '#eee',fontSize: '2.4rem',fontWeight: '300', borderRadius:'0.8rem 0.8rem 0 0', display:'flex', flexDirection:'row'}}>
                    {result ? <Typography sx={{ fontSize: '1.2rem',color: '#888'}}>({result})</Typography> :" "}
                    &nbsp;
                    {calc || "0"}
                </Typography>
                <Typography sx={{display: 'flex', justifyContent:'center',backgroundColor: '#ba68c8', width:'100%'}}>
                    <Button onClick={() => updateCalc("/")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>/</Button>
                    <Button onClick={() => updateCalc("*")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>*</Button>
                    <Button onClick={() => updateCalc("+")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>+</Button>
                    <Button onClick={() => updateCalc("-")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>-</Button>
                    {/* <Button onClick= {deleteLast} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>DEL</Button> */}
                    <Button onClick= {resetClick} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '1.2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 0%',fontWeight: '700',backgroundColor: '#ba68c8'}}>RES</Button>
                </Typography>
                <Typography sx={{display: 'flex',flexWrap: 'wrap', backgroundColor:'#ce93d8'}}>
                    {createDigits()}
                    <Button onClick={() => updateCalc("0")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 33.333%',maxWidth: '33.333%',backgroundColor:'#ce93d8'}}>0</Button>
                    <Button onClick={() => updateCalc(".")} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 33.333%',maxWidth: '33.333%',backgroundColor:'#ce93d8'}}>.</Button>
                    <Button onClick={calculate} sx={{ appearance: 'none',color: '#f8f8f8',fontSize: '2rem',padding: '1rem 1.5rem',transition: '0.4s',flex: '1 1 33.333%',maxWidth: '33.333%',backgroundColor:'#ce93d8'}}>=</Button>
                </Typography>
            </Card>
        </Grid>
     );
}
export default Calculator;