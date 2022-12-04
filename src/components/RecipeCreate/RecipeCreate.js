import axios from 'axios'
import React, { useState } from 'react'
import './RecipeCreate.css'

export const RecipeCreate = () => {
  const[newRecipe, setNewRecipe] = useState({
    title:'',
    cookTime: '',
    difficult: Boolean,
    ingredients: [],
    instruction: ''
  })

  const createNewRecipe = async () => {
    try{
      const newlyCreated = await axios.post('http://localhost:4000/api/recipes/', newRecipe)
    } 
    catch (err){
      console.log(err)
    }
  }

const handleCreate = (e) => {
  const newRecipeData = {...newRecipe}
  if (e.target.name === 'ingredients'){
    let newIngredients = e.target.value.split(',')
    setNewRecipe({...newRecipeData, ingredients: newIngredients})
    return
  }
  newRecipeData[e.target.name] = e.target.value
  setNewRecipe(newRecipeData)  
}
console.log(newRecipe)
  return (
    <div>
        <form>
            <input placeholder="Recipe Title" name='title' value={newRecipe.title} onChange={handleCreate}></input>
            <input placeholder="Cook Time" name='cookTime' value={newRecipe.cookTime} onChange={handleCreate} ></input>
            <input placeholder="Difficult (true/false)" name='difficult' value={newRecipe.difficult}onChange={handleCreate} ></input>
            <input placeholder="Ingredients" name='ingredients' value={newRecipe.ingredients} onChange={handleCreate} ></input>
            <input placeholder="Instructions" name='instruction' value={newRecipe.instruction} onChange={handleCreate} ></input>
        </form>
        <button onClick={createNewRecipe}>Create new recipe</button>
    </div>
  )
}
