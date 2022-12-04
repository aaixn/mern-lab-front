// This component will update one or many of a recipe's details.
// This will be done by filling out a form to carry out the PUT request to the back-end.
// When the action is completed, users will be redirected back to the homepage.
// To access this Update feature, there will be a button inside the RecipeDetails
// and the form will show up.

import axios from 'axios'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'

function RecipeUpdate() {
  const {id} = useParams()
  const [form, setForm] = useState({
    title: '',
    cookTime: '',
    difficult: Boolean,
    ingredients: [],
    instructions: ''
  })


  const updateRecipe = async () => {
    try {
      console.log(form)
      const change = await axios.put(`http://localhost:4000/api/recipes/${id}`, form)
      console.log(change)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const newObj = {...form}
    if (e.target.name === 'ingredients'){
     let updateIngredient = e.target.value.split(',')
     setForm({...newObj,ingredients: updateIngredient})
     return
    }
    newObj[e.target.name] = e.target.value
    setForm(newObj)
   
  }
  

  return (
    <div>
      <form>
        <input placeholder='Recipe Title' name='title' value={form.title} onChange={handleChange}></input>
        <input placeholder='Cook Time' name='cookTime' value={form.cookTime} onChange={handleChange}></input>
        <input placeholder='Difficult (true or false)' name='difficult' value={form.difficult} onChange={handleChange}></input>
        <input placeholder='Ingredients' name='ingredients' value={form.ingredients} onChange={handleChange}></input>
        <input placeholder='Instructions' name='instructions' value={form.instructions} onChange={handleChange}></input>
      </form>
      <button onClick={updateRecipe}>Update Recipe</button>
    </div>
  )
}

export default RecipeUpdate