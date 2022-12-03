// This page shows all the recipes and when users click on the name, it will show that
// recipe's details.

import React, { useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Home = ({allRecipes}) => {
  

  let recipeList = allRecipes.map((recipe, index) =>{
    return(
      <div key={index}>
      <Link 
      to={'/recipe/' + recipe._id}
      style={{textDecoration: 'none', color: 'black'}} 
      >
        <div> {recipe.title} </div>
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

