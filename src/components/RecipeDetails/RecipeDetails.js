// This component will display the recipe's details when it is being clicked on from the
// Home component.
// It will also contain two buttons to Update and Delete the recipe's details.

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import RecipeDelete from '../RecipeDelete/RecipeDelete';

const RecipeDetails = ({allRecipes, getRecipes}) => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState()
  
  useEffect(() => {

    const getRecipe = async () => {
      await getRecipes()
      const oneRecipe = await allRecipes.filter(recipe => recipe._id === id)
      setRecipe(oneRecipe)
    }
  }, [])
  const oneRecipe = allRecipes.filter(recipe => recipe._id === id)

  return (
    <div>
      <h1>{oneRecipe[0].title}</h1>
      <p>Cook Time: {oneRecipe[0].cookTime}</p>
      <p>Difficult: {oneRecipe[0].difficult ? 'Yes' : 'No'}</p>
      <p>Ingredients: </p>
      {oneRecipe[0].ingredients.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
      <p>Intructions: {oneRecipe[0].instructions}</p>
      <Link to='/'><RecipeDelete /></Link>
    </div>
  )
}

export default RecipeDetails

// issue - on reload, blank page; doesnt wait before attempting to render
// * Cannot read properties of undefined (reading 'title')