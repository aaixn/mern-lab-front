// This page shows all the recipes and when users click on the name, it will show that
// recipe's details.

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { RecipeCreate } from '../RecipeCreate/RecipeCreate';
import './Home.css'

const Home = ({allRecipes}) => {
  const [showRecipeList, setShowRecipeList] = useState()

  useEffect(()=>{
  let recipeList = allRecipes.map((recipe, index) =>{
    return(
      <div className='recipe-card' key={index}>
      <Link 
      to={'/recipe/' + recipe._id} 
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
      <div className='recipe-list'>{showRecipeList}</div>
      <RecipeCreate />

    </div>
  )
}

export default Home


