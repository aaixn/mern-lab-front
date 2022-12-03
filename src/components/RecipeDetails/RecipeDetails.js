// This component will display the recipe's details when it is being clicked on from the
// Home component.
// It will also contain two buttons to Update and Delete the recipe's details.

import React from 'react'
import {useParams} from 'react-router-dom'

const RecipeDetails = ({allRecipes}) => {
  const {id} = useParams;

  let oneRecipe = allRecipes.filter((recipe, index) => recipe._id === id)
  console.log(oneRecipe)
  return (
    <div>{oneRecipe.title}</div>
  )
}

export default RecipeDetails