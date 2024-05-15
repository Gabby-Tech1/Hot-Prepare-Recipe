import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Recipe from './Components/Recipe'
import Banner from './Components/Banner'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipes, setSelectedRecipes] = useState('')

  const URL = 'https://dummyjson.com/recipes'

  const getRecipes = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
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
    <div>
      <Navbar/>
      <Hero/>
      <Recipe meals={filteredRecipes}/>
      <Banner/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App