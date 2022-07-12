import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TextField, FormLabel, Box, Button } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const RecipeDelete = () => {
    const [info, setInfo] = useState({});
    const id = useParams().id;
    const navi = useNavigate();  
    
    useEffect(() => {
        const fetch = async() => {
            await axios.get(`https://recipe-seek.herokuapp.com/api/recipe/${id}`)
            .then((res) => res.data)
            .then((display)=>setInfo(display.data));
        };
        
        fetch();
    }, [id])

    const dbRequest  = async() => {
      await axios.delete(`https://recipe-seek.herokuapp.com/api/recipe/${id}`, {
        name:String(info.name),
        image:String(info.image),
       description:String(info.description),
       ingredients:String(info.ingredients),
       directions:String(info.directions),
    }).then(res => res.data);
  }
  const DisabledColor = styled(TextField)(()=>({
    ".MuiInputBase-input.Mui-disabled":{
      WebkitTextFillColor: "#000"
    }
  }))
    const handleSubmit = (e) => {
      e.preventDefault();
      dbRequest().then(()=> navi('/recipes'))
    }
    const handleChange = (e) => {
      console.log(e);
      
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
      <DisabledColor disabled  value={info.name} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="name"/>

      <FormLabel>Image</FormLabel>
      <DisabledColor disabled  value={info.image} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="image"/>

      <FormLabel>Description</FormLabel>
      <DisabledColor disabled  value={info.description} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="description"/>

      <FormLabel>Ingredients</FormLabel>
      <DisabledColor disabled  value={info.ingredients} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="ingredients" multiline/>

      <FormLabel>Directions</FormLabel>
      <DisabledColor disabled  value={info.directions} onChange={handleChange} margin = "normal" fullWidth variant = "outlined" name ="directions" multiline/>
      
      <Button variant ="contained" type="submit">Confirm Deletion</Button>
      </Box>
    </form>
    )}

    </div>
  )
}

export default RecipeDelete