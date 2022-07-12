import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TextField, Container } from "@mui/material";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const ShowRecipe = () => {
    const [info, setInfo] = useState({});
    const id = useParams().id;
 
    
    useEffect(() => {
    const dbRequest  = async() => {
      await axios.get(`https://recipe-seek.herokuapp.com/api/recipe/${id}`, {
        name:String(info.name),
        image:String(info.image),
       description:String(info.description),
       ingredients:String(info.ingredients),
       directions:String(info.directions),
    }).then(res => res.data)
    .then((display)=>setInfo(display.data));
  };
  dbRequest();
}, [id,info.name, info.image, info.description, info.ingredients, info.directions])

const DisabledColor = styled(TextField)(()=>({
  ".MuiInputBase-input.Mui-disabled":{
    WebkitTextFillColor: "#000"
  }
}))


  return (
    <div>
      {info && ( <ul>
      
      <Container maxwidth="sm">
      <h3>{info.name} </h3>
      <img src={info.image} alt={"Error"}  width= "360" height="361" />
      
      <h4>Ingredients:</h4>
      <DisabledColor disabled value={info.ingredients} margin = "normal" fullWidth variant = "outlined" name ="ingredients" multiline/>
      
      <h4>Directions:</h4>
      <DisabledColor disabled value={info.directions} margin = "normal" fullWidth variant = "outlined" name ="directions" multiline/>
      
      </Container>
    </ul>
    )}

    </div>
  )
}

export default ShowRecipe