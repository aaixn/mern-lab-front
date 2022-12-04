import React, { useState } from 'react'
import './RecipeCreate.css'

export const RecipeCreate = () => {
  const[newRecipe, setNewRecipe] = useState({
    title:'',
    cookTime: '',
    difficult: '',
    ingredients: '',
    instruction: ''
  })

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
            <input placeholder="Recipe Title" name='' value='newRecipe.title' onchange=''></input>
            <input placeholder="Cook Time" name='cookTime' value='newRecipe.cookTime'></input>
            <input placeholder="Difficult (true/false)" name='difficult' value='newRecipe.difficult'></input>
            <input placeholder="Ingredients" name='ingredients' value='newRecipe.ingredients'></input>
            <input placeholder="Instructions" name='instruction' value='newRecipe.instruction'></input>
        </form>
    </div>
  )
}
