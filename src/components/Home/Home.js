// This page shows all the recipes and when users click on the name, it will show that
// recipe's details.

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { RecipeCreate } from '../RecipeCreate/RecipeCreate';

const Home = ({allRecipes}) => {
  const [showRecipeList, setShowRecipeList] = useState()

  useEffect(()=>{
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
  setShowRecipeList(recipeList)
}, [allRecipes])

  return (
    <div>
      <h1>All Recipes</h1>
      <div>{showRecipeList}</div>
      <RecipeCreate />

    </div>
  )
}

export default Home

// * after delete, displayed recipes does not update to the data in the backend until after reload

