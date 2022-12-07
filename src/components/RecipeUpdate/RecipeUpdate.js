// This component will update one or many of a recipe's details.
// This will be done by filling out a form to carry out the PUT request to the back-end.
// When the action is completed, users will be redirected back to the homepage.
// To access this Update feature, there will be a button inside the RecipeDetails
// and the form will show up.

import axios from 'axios'
import React, { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import './RecipeUpdate.css'

import RecipeDelete from '../RecipeDelete/RecipeDelete'

const RecipeUpdate = () => {
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
      const change = await axios.put(`https://floral-bird-829.fly.dev/api/recipes/${id}`, form)
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
      <form className='recipe-form'>
        <input placeholder='Recipe Title' name='title' value={form.title} onChange={handleChange} required></input>
        <input placeholder='Cook Time' name='cookTime' value={form.cookTime} onChange={handleChange}></input>
        <input placeholder='Difficult (true or false)' name='difficult' value={form.difficult} onChange={handleChange}></input>
        <input placeholder='Ingredients' name='ingredients' value={form.ingredients} onChange={handleChange}></input>
        <input placeholder='Instructions' name='instructions' value={form.instructions} onChange={handleChange}></input>
        <button onClick={updateRecipe}>Update Recipe</button>
        <Link to='/'><RecipeDelete /></Link>
      </form>
    </div>
  )
}

export default RecipeUpdate