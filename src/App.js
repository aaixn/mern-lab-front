import './App.css';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'


function App() {

  const [allRecipes, setAllRecipes] = useState([])

  return (
    <div>
  <div>
  
  </div>

    <Routes>
      <Route path='/' element={<Home allRecipes={allRecipes} setAllRecipes={setAllRecipes} />} />
      <Route path='/:id' element={<RecipeDetails allRecipes={allRecipes}/>}/>
    </Routes>
    </div>
  );
}

export default App;
