import React, {useState} from 'react'
import { TextField, FormLabel, Box, Button } from "@mui/material";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AddRecipe = () => {
  const navi = useNavigate(); 
  const [info, setInfo] = useState({
  name: '',
  image: '',
  description: '',
  ingredients: '',
  directions: ''
  });
  const handleChange =(e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };
  
  const dbRequest = async() => {
    await axios.post("https://recipe-seek.herokuapp.com/api/recipe", {
      name:String(info.name),
      image:String(info.image),
      description:String(info.description),
      ingredients:String(info.ingredients),
      directions:String(info.directions)
    }).then(res => res.data);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dbRequest().then(() => navi('/recipes'))
  }
  return (
    <form onSubmit={handleSubmit}>
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
      
      <Button variant ="contained" type="submit">Add Recipe</Button>
      </Box>
    </form>
  )
}

export default AddRecipe