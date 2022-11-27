import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TextField, FormLabel, Box, Button } from "@mui/material";
import { useParams } from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const RecipeUpdate = () => {
    const [info, setInfo] = useState({});
    const id = useParams().id;
    const navi = useNavigate();  
    
    useEffect(() => {
        const fetch = async() => {
            await axios.get(`https://recipe-seek.onrender.com/api/recipe/${id}`)
            .then((res) => res.data)
            .then((display)=>setInfo(display.data));
        };
        
        fetch();
    }, [id])

    const dbRequest  = async() => {
      await axios.put(`https://recipe-seek.onrender.com/api/recipe/${id}`, {
        name:String(info.name),
        image:String(info.image),
       description:String(info.description),
       ingredients:String(info.ingredients),
       directions:String(info.directions),
    }).then(res => res.data);
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      dbRequest().then(()=> navi('/recipes'))
    }
    const handleChange = (e) => {
      setInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  return (
    <div>
      {info && ( <form onSubmit={handleSubmit}>
      <Box 
      display = "flex" 
      flexDirection = "column"
      justifyContent={"center"} 
      maxWidth= {700} 
      alignContent= {"center"} 
      alignSelf={"center"}
      marginTop={"15px"}
      marginLeft={"auto"}
      marginRight={"auto"}>
      <FormLabel>Name</FormLabel>
      <TextField value={info.name} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="name"/>

      <FormLabel>Image</FormLabel>
      <TextField value={info.image} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="image"/>

      <FormLabel>Description</FormLabel>
      <TextField value={info.description} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="description"/>

      <FormLabel>Ingredients</FormLabel>
      <TextField value={info.ingredients} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="ingredients" multiline/>

      <FormLabel>Directions</FormLabel>
      <TextField value={info.directions} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="directions" multiline/>
      
      <Button variant ="contained" type="submit">Update Recipe</Button>
      </Box>
    </form>
    )}

    </div>
  )
}

export default RecipeUpdate