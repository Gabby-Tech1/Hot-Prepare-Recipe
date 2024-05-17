import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Recipe from './Components/Recipe'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import About from './Components/About'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipes, setSelectedRecipes] = useState('')

  const URL = 'https://dummyjson.com/recipes'

  const getRecipes = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setRecipes(data.recipes)
      
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
    <BrowserRouter>
    <div>
      <Navbar/>
      <Hero/>
      <Recipe meals={filteredRecipes}/>
      <Banner/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App