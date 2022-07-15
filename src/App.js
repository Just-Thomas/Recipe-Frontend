import './App.css';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import RecipeUpdate from './components/RecipeUpdate';
import RecipeDelete from './components/RecipeDelete';
import ShowRecipe from './components/ShowRecipe';
import React from 'react';

function App() {
  return ( <React.Fragment>

    <header>
      <NavBar />
    </header>
    <main>
      <Routes>
        <Route path= '/' element={<Home/>} exact />
        <Route path= '/recipes' element={<Recipes/>} exact />
        <Route path= '/add' element={<AddRecipe/>} exact />
        <Route path= "/recipes/:id" element= {<RecipeUpdate/>} exact/>
        <Route path= "/recipes/delete/:id" element= {<RecipeDelete/>} exact/>
        <Route path= '/recipes/show/:id' element={<ShowRecipe/>} exact />
      </Routes>
    </main>
  </React.Fragment>
   
  );
}

export default App;
