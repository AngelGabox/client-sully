import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/views/LandingPage'
import Home from '../components/views/Home'

const index = () => {
    return (
        <div className='divIndex'>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/> 
                <Route exact path='/main' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default index
