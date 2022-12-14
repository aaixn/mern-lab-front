// This component will display the recipe's details when it is being clicked on from the
// Home component.
// It will also contain two buttons to Update and Delete the recipe's details.

import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import RecipeUpdate from '../RecipeUpdate/RecipeUpdate';
import './RecipeDetails.css'

const RecipeDetails = ({allRecipes, getRecipes}) => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState()
  const navigate = useNavigate();
  
  useEffect(() => {
    const getRecipe = async () => {
      await getRecipes()
      const oneRecipe = await allRecipes.filter(recipe => recipe._id === id)
      setRecipe(oneRecipe)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const oneRecipe = allRecipes.filter(recipe => recipe._id === id)

  return oneRecipe[0] ? (           
    <div>
      <div className='recipe-details'>
      <h1>{oneRecipe[0].title}</h1>
      <p><span className='bold'>Cook Time:</span> {oneRecipe[0].cookTime}</p>
      <p><span className='bold'>Difficult:</span> {oneRecipe[0].difficult ? 'Yes' : 'No'}</p>
      <p><span className='bold'>Ingredients:</span> </p>
      {oneRecipe[0].ingredients.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
      <p><span className='bold'>Instructions:</span><br></br> {oneRecipe[0].instructions}</p>
      </div>
      <RecipeUpdate />
      <button className='back' onClick={() => navigate(-1)}>Back</button>
    </div>
  ) : null
}

export default RecipeDetails
