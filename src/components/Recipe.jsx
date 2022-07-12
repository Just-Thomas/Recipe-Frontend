import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';
import "./RecipeStyle.css"
const Recipe = (props) => {
    const { _id,name,image,description} = props.recipe;
  return <div className ="card">
    <img src={image} alt={name} width= "260" height="261" />
    <h3>{name} </h3>
    <p>{description}</p>
    <Button LinkComponent={Link} to={`/recipes/${_id}`}>Update</Button>
    <Button LinkComponent={Link} to={`/recipes/show/${_id}`}>Show</Button>
    <Button LinkComponent={Link} to={`/recipes/delete/${_id}`}>Delete</Button>
    
    
    
    </div>;
  
};

export default Recipe;