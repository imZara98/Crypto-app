import { useState } from "react";
import { Grid,Typography } from "@mui/material";
import List from "./List";
import Add from "./Add";

export interface IPeople {
  id: number;
  fullName: string;
  age: number;
  img_url: string;
  bio? : string;
};

function AppUser() {
  const [peoples, setPeoples] = useState<IPeople[]>([])
  return (
    <Grid  sx={{ padding:'0 2rem 1rem 2rem'}}>
      <Typography variant="h4" sx={{bgcolor:'#90caf9', color:'#fff', textShadow:'3px 3px rgba(0,0,0,0.3)', padding:'2rem 1rem'}}>PERSONS MANAGER</Typography>
      <List  peoples={peoples} setPeoples={setPeoples} />
      <Add peoples={peoples} setPeoples={setPeoples} />
    </Grid>
  );
}

export default AppUser;
