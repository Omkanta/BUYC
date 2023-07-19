import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import CarProducts from '../Pages/CarProducts';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/cars' element={<CarProducts/>}></Route>
    </Routes>
  )
}

export default MainRoutes