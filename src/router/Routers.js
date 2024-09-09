import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResultList from '../Pages/SearchResultList'
import TourDetials from '../Pages/TourDetials'
import Tours from '../Pages/Tours'
import ThankYou from '../Pages/ThankYou'


const Routers = () => {
  return (
    <Routes>
    <Route path ="/" element={<Navigate to ='/home' />} />
    <Route path ='/home'  element={<Home />} />
   
    <Route path ='/login'  element={<Login />} />
    <Route path ='/register'  element={<Register />} />
    <Route path ='/tour/search'  element={<SearchResultList />} />
    <Route path="/tours/:id" element={<TourDetials />} />

    <Route path ='/tours'  element={<Tours />} />
    <Route path ='/thank-you'  element={<ThankYou />} />
   </Routes>
  )
}

export default Routers


