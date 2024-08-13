import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import { Heading } from '@chakra-ui/react'
import SearchBarResultPage from './pages/SearchBarResultPage'
import NotFoundPage from './pages/NotFoundPage'
import TestingPage from './pages/TestingPage'



export default function AllRoute() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route  path='/login' element={<LoginPage/>} />
    <Route  path='/register' element={<RegisterPage/>} />
    <Route  path={"/cart"} element={<CartPage/>} />
    <Route  path='/wishlist' element={<Heading>WishList</Heading>} />
    <Route  path='/search/:searchKey' element={<SearchBarResultPage/>} />
    {/* Dynamic Pages */}
    <Route  path='/product/:id' element={<SinglePage/>} /> 
    {/* Static Pges */}
    <Route path='/:category' element={<TestingPage/>}  /> 
    {/* <Route path='/mens' element={<MensPage/>}  /> 
    <Route  path='/womens' element={<WomensPage/>} />
    <Route  path='/bluelens' element={<BluelensPage/>} />
    <Route  path='/buy1get1' element={<Buy1get1Page/>} />
    <Route  path='/kidslense' element={<KidslensePage/>} />
    <Route  path='/kidssunglass' element={<KidssunglassPage/>} />
    <Route  path='/screenlense' element={<ScreenlensePage/>} />
    */}
    {/* Page not Founnd */}
    <Route path='*' element={<NotFoundPage/>} />
    
   </Routes>
  )
}
