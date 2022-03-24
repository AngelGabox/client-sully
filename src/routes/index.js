import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/views/LandingPage'
import Home from '../components/views/Home'
import Register from '../components/Register/Register'

const index = () => {
    return (
        <div className='divIndex'>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/> 
                <Route exact path='/main' element={<Home/>}/>
                <Route exact path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default index
