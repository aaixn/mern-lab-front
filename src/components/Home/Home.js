// This page shows all the recipes and when users click on the name, it will show that
// recipe's details.

import React, { useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Home = ({allRecipes, setAllRecipes}) => {
  
  axios({
    method: 'get',
    url: 'http://localhost:4000/api/recipes'
  })
  .then(res => 
    setAllRecipes(res.data)
    )
  .catch (err => console.log(err))
  
    const handleClick = (e) => {
      console.log(e)
    }

  let recipeList = allRecipes.map((recipe, index) =>{
    return(
      <div key={index}>
      <Link 
      to={'/recipe/' + recipe._id}
      style={{textDecoration: 'none', color: 'black'}} 
      >
        <div onClick={handleClick}> Recipe Name: {recipe.title} </div>
        <div>{recipe._id}</div>
        </Link>
      </div>
    )
  })
  return (
    <div>
      <h1>All recipes</h1>
      <div>{recipeList}</div>

    </div>
  )
}

export default Home

