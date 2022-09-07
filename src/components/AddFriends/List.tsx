import { FC , Dispatch,SetStateAction } from "react";
import { IPeople } from "./AppUser";
import { Typography, Card, Grid, Badge } from "@mui/material";
import { AiOutlineUserDelete } from "react-icons/ai";
import Edit from "./Edit";

interface IProps{
    peoples: IPeople[];
    setPeoples : Dispatch<SetStateAction<IPeople[]>>;
}

const List :FC<IProps> = ({peoples, setPeoples}) =>{
    const handleDeletePeople = (id:number) :void => {
        const persons : IPeople[] = [...peoples];
        const filteredPersons : IPeople[] = persons.filter((p) => p.id !== id);
        setPeoples(filteredPersons);
    }
    const renderList:JSX.Element[] =  peoples.map((people) => (
        <Grid  key={people.id} lg={2}>
            <Card sx={{diplay:'flex', flexDirection:'row', padding:'2rem', maxWidth:'30rem', margin:'2rem 1rem'}}>
                <Typography sx={{display:'flex', flexDirection:'row'}}>
                    <img src={people.img_url} alt={people.fullName} width={100} height={100} className='rounded img-fluid img-thumbnail'/>
                    <Typography sx={{marginLeft:'1rem'}}>
                        <Typography sx={{display:'flex', flexDirection:'row'}}>
                            <Badge 
                            color="primary"
                            badgeContent={`${people.age} years`} 
                            sx={{padding:'0.2rem 0 0.5rem 0', display:'flex', flexDirection:'row'}}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                              }}
                            >
                                <Typography variant='h4'sx={{fontWeight:'800'}}>{people.fullName}</Typography>
                            </Badge>
                        </Typography>
                        <Typography variant="subtitle2" color="#9e9e9e" sx={{marginTop:'1.5rem'}}>{people.bio}</Typography>
                    </Typography>
                    <Typography sx={{position:'absolute', left:'30rem'}}>
                        <Edit people={people} peoples= {peoples} setPeoples = {setPeoples} />
                        <AiOutlineUserDelete className='text-danger m-1'  size={20} onClick={ () =>  handleDeletePeople(people.id) } />
                    </Typography>
                </Typography>
            </Card>
        </Grid>
    ));
    return(
    <Grid item>
       {renderList}
    </Grid>
    )
}
export default List;