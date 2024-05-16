import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
      setRecipes(data.recipes)
      
    } catch (error) {
      console.error(error)
    }
  }

  // const getRecipe = async () => {
  //   try {
  //     const axiosFetch = await axios.get(URL)
  //     const axiosdata = await axiosFetch.
  //     console.log(axiosdata)
  //     setRecipes(axiosdata.recipes)
  //   }
  //   catch(err){
  //     console.error(err)
  //   }
  // }

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