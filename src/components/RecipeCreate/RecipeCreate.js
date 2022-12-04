import React from 'react'
import './RecipeCreate.css'

export const RecipeCreate = () => {
  return (
    <div>
        <form>
            <input placeholder="Recipe Title"></input>
            <input placeholder="Cook Time"></input>
            <input placeholder="Difficult (true/false)"></input>
            <input placeholder="Ingredients"></input>
            <input placeholder="Instructions"></input>
        </form>
    </div>
  )
}
