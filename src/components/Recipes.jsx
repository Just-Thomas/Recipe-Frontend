import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import "./RecipeStyle.css";
import axios from 'axios';
const URL = 'https://recipe-seek.herokuapp.com/api/recipe';

const fetch = async() => {
    return await axios.get(URL).then((res) => res.data);
};

const Recipes = () => {
    const [recipes, setRecipes] = useState();
    useEffect(() => {
    
    fetch().then((display) => setRecipes(display.data));
    }, []);
    console.log(recipes)
  return (
    <div>
      <ul>

          {recipes && recipes.map((recipe, index) => (
            <div classname ="recipe" key={index}>
              <Recipe recipe={recipe}/>
            </div>
          )) }
      </ul>
    </div>
  );
}

export default Recipes