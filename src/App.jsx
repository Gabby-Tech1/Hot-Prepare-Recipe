import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Recipe from './Components/Recipe'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipes, setSelectedRecipes] = useState('')

  const URL = 'https://dummyjson.com/recipes'

  const getRecipes = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setRecipes(data['recipes'])
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRecipes()
  },[])

  const filteredRecipes = selectedRecipes ? recipes.filter((product)=> product.categories === selectedRecipes)
    : recipes
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Recipe meals={filteredRecipes}/>
    </div>
  )
}

export default App