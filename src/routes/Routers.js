import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetail from '../pages/FoodDetails'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/cate/' />} />
      <Route path='/cate' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetail />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Routers