import './App.css';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';


const App = () => {

  const [allRecipes, setAllRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [allRecipes])

  const getRecipes = () => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/recipes'
    })
    .then(res => 
      setAllRecipes(res.data)
      )
    .catch (err => console.log(err))
  }

  return (
    <div className='app'>
  <div>
  
  </div>

    <Routes>
      <Route path='/' element={<Home allRecipes={allRecipes} />} />
      <Route path='/recipe/:id' element={<RecipeDetails allRecipes={allRecipes} getRecipes={getRecipes}/>}/>
    </Routes>
    </div>
  );
}

export default App;
