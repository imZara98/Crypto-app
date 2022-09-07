import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { FC, useState,Dispatch, SetStateAction,FormEvent } from "react";
import { IPeople } from "./AppUser";

interface IProps {
    peoples : IPeople[];
    setPeoples : Dispatch<SetStateAction<IPeople[]>>;
};

const Add : FC<IProps> = ({peoples, setPeoples}) => {
    const[fullName, setFullName] = useState<string>("");
    const[age, setAge] = useState<number | string>("");
    const[img_url, setImg_url] = useState<string>("");
    const[bio, setBio] = useState<string>("");
    const handleResetStates = ():void => {
        setFullName("");
        setAge("");
        setImg_url("");
        setBio("");
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        if(!fullName){
            return alert("Name is required!!")
        };
        if(!age){
            return alert("Age is required!!")
        };
        if(!img_url){
            return alert("Image is required!!")
        };
        setPeoples([
            ...peoples,
            {
                id: Math.floor(Math.random() * 1000000), 
                fullName,
                age:Number(age),
                img_url,
                bio,
            }
        ]);
        handleResetStates();
    }
    return(
      <Grid item lg={6} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', padding:'2rem 5rem'}}>
        <form  onSubmit={(e) => handleSubmit(e)} style={{display:'flex', flexDirection:'column'}}>
            <Typography  sx={{display:'flex', flexDirection:'column'}}>
                <Input type="text" onChange={(e) => setFullName(e.target.value)} name="fullName" value={fullName} placeholder="Enter Name" sx={{margin:'2rem 1rem 0', padding:'1rem 3rem 0 0'}} />
                <Input type="number" onChange={(e) => setAge(e.target.value)} name="age" value={age} placeholder="Enter Age" sx={{margin:'1rem', padding:'1rem 3rem 0 0'}} />
                <Input type="text" onChange={(e) => setImg_url(e.target.value)} name="img_url" value={img_url} placeholder="Add Photo" sx={{margin:'1rem', padding:'1rem 3rem 0 0'}} />
                <TextField name="bio" onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Write Bio" rows={7} sx={{margin:'1rem', padding:'1rem 10rem 0 0'}} />
            </Typography>
            <Button type="submit" sx={{ bgcolor:'#90caf9', color:'#f8f8f8',maxWidth:'12rem', marginLeft:'1rem'}}>Add to List</Button>
        </form>
      </Grid>  
    )
}
export default Add;