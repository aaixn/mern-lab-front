// This component will delete the entire recipe.
// This will be done by filling out a form to carry out the DELETE request to the back-end.
// When the action is completed, users will be redirected back to the homepage.
// To access this Delete feature, there will be a button inside the RecipeDetails
// and the form will show up.

import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const RecipeDelete = () => {
  const {id} = useParams()
  const deleteRecipe = () => {
    axios({
      method: 'delete',
      url: `http://localhost:4000/api/recipes/${id}`
    })
    .catch (err => console.log(err))
  }

  return (
    <button className='delete' onClick={deleteRecipe}>Delete</button>
  )
}

export default RecipeDelete

