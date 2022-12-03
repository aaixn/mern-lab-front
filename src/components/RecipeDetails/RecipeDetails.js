// This component will display the recipe's details when it is being clicked on from the
// Home component.
// It will also contain two buttons to Update and Delete the recipe's details.

import React from 'react'
import {useParams} from 'react-router-dom'

const RecipeDetails = ({allRecipes}) => {
  const {id} = useParams();
  console.log(id)
  let oneRecipe = allRecipes.filter((recipe, index) => recipe._id === id)
  console.log(allRecipes)
  console.log(oneRecipe)
  return (
    <div>
      <h1>{oneRecipe[0].title}</h1>
      <p>Cook Time: {oneRecipe[0].cookTime}</p>
      <p>Difficult: {oneRecipe[0].difficult ? 'Yes' : 'No'}</p>
      <p>Ingredients: </p>
      {oneRecipe[0].ingredients.map((item) => {
        return (
          <li>{item}</li>
        )
      })}
      <p>Intructions: {oneRecipe[0].instructions}</p>
    </div>
  )
}

export default RecipeDetails