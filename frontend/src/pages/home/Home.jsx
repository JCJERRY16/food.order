import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/explorerMenu/ExploreMenu'
import FoodDisplay from '../../component/foodDisplay/FoodDisplay'
import AppDownload from '../../component/appDownload/AppDownload'

const Home = () => {

 const [category,setCategory] = useState('All');

  return (
    <div>
     <Header/> 
     <ExploreMenu category={category} setCategory={setCategory} />
     <FoodDisplay category={category}/>
     <AppDownload/>
    </div>
  )
}

export default Home
