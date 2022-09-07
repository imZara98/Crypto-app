import { FC, Dispatch, SetStateAction, useState } from "react";
import { Modal, Typography, Button, Input, Box, TextareaAutosize } from "@mui/material";
import { IPeople } from "./AppUser";
import { FaUserEdit } from "react-icons/fa";

interface IProps {
    people : IPeople;
    peoples : IPeople[];
    setPeoples : Dispatch<SetStateAction<IPeople[]>>;
}

const Edit : FC<IProps> = ({people, peoples, setPeoples}) => {
    const[fullName, setFullName] = useState<string>(people.fullName);
    const[age, setAge] = useState<number | string>(people.age);
    const[img_url, setImg_url] = useState<string>(people.img_url);
    const[bio, setBio] = useState<string | undefined>(people.bio);
    const [isShowModal, setIsShowModal] = useState<boolean>(true);
    const handelClose = () => {
        setIsShowModal(false);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        const persons = [...peoples];
        const index : number = persons.findIndex(p => p.id === people.id);
        persons[index] = {
            id: people.id,
            fullName,
            age: Number(age),
            img_url,
            bio,
        };
        setPeoples(persons);
        setIsShowModal(false);
    };
    return(
        <>
        <FaUserEdit size={20} onClick={ () => setIsShowModal(true)} style={{ fontSize:'1rem', }}/>
        <Modal open={isShowModal} onClose={handelClose} >
            <Box sx={{display:'flex', flexDirection:'column', bgcolor:'#f5f5f5', padding:'1rem 20rem'}}>
                <Typography component='h4' sx={{display:'flex', flexDirection:'column', width:'10rem'}}>
                    {people.fullName}
                    <Button type="button" onClick={() => setIsShowModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                </Typography>
                <Typography component= 'div' sx={{display:'flex', flexDirection:'column'}}>
                    <form onSubmit={(e) => handleSubmit(e)} style={{display:'flex', flexDirection:'column'}}>
                        <Typography sx={{display:'flex', flexDirection:'column', margin:'1rem 0'}}>
                        <Input type="text" onChange={(e) => setFullName(e.target.value)} sx={{margin:'1rem 0'}} name="fullName" value={fullName} placeholder="Enter your Name"/>
                        <Input type="number" onChange={(e) => setAge(e.target.value)} sx={{margin:'1rem 0'}} name="age" value={age} placeholder="Enter Age"/>
                        <Input type="text" onChange={(e) => setImg_url(e.target.value)} sx={{margin:'1rem 0'}} name="img_url" value={img_url} placeholder="Add your photo"/>
                        <TextareaAutosize name="bio" onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Write your bio" minRows={7}/>
                        </Typography>
                        <Typography m={2}>
                            <Button type="submit" sx={{backgroundColor:'#4caf50',color:"#f8f8f8", margin:'1rem' }}>Edit Person</Button>
                            <Button type="button" sx={{backgroundColor:'#ef5350',color:"#f8f8f8" }}  onClick={() => setIsShowModal(false)}>Cancel</Button>
                        </Typography>
                    </form>
                </Typography>
            </Box>
        </Modal>
        </>
    )
}
export default Edit;