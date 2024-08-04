import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MensPage from './pages/MensPage'
import WomensPage from './pages/WomensPage'
import BluelensPage from './pages/BlueLensPage'
import Buy1get1Page from './pages/Buy1Get1Page'
import KidslensePage from './pages/KidsLensPage'
import KidssunglassPage from './pages/KidssunglassPage'
import ScreenlensePage from './pages/ScreenLensPage'
import SinglePage from './pages/SinglePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import { Heading } from '@chakra-ui/react'
import SearchBarResultPage from './pages/SearchBarResultPage'
import NotFoundPage from './pages/NotFoundPage'



export default function AllRoute() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route  path='/login' element={<LoginPage/>} />
    <Route  path='/register' element={<RegisterPage/>} />
    <Route  path={"/cart"} element={<CartPage/>} />
    <Route  path='/wishlist' element={<Heading>WishList</Heading>} />
    <Route  path='/api/search/:searchKey' element={<SearchBarResultPage/>} exact />
    {/* Static Pges */}
    <Route path='/mens' element={<MensPage/>}  /> 
    <Route  path='/womens' element={<WomensPage/>} />
    <Route  path='/bluelens' element={<BluelensPage/>} />
    <Route  path='/buy1get1' element={<Buy1get1Page/>} />
    <Route  path='/kidslense' element={<KidslensePage/>} />
    <Route  path='/kidssunglass' element={<KidssunglassPage/>} />
    <Route  path='/screenlense' element={<ScreenlensePage/>} />
    <Route  path='/product/:id' element={<SinglePage/>} />
    {/* Page not Founnd */}
    <Route path='*' element={<NotFoundPage/>} />
    
   </Routes>
  )
}
