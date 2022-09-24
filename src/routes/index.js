import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Route, Routes } from 'react-router-dom'
//  Components
import LandingPage from '../components/views/LandingPage/LandingPage'
import Home from '../components/views/Home/Home'
import  Login from '../components/views/auth/Login/Login'
import Register from '../components/views/auth/Register/Register'


const pageTransition = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
}
const index = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route exact path='/' element={
                    <motion.div
                    className="page"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    >
                        <LandingPage/>
                    </motion.div>
                }/> 
                <Route exact path='/home' element={
                    <motion.div
                    className="page"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    >
                        <Home/>
                    </motion.div>
                }/>
                <Route exact path='/login' element={
                    <motion.div
                    className="page"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    >
                        <Login/>
                    </motion.div>
                }/>
                <Route exact path='/register' element={<Register/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default index
