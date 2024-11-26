import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Route, Navigate,Routes } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { getUser, setUser } from '../Redux/actions/userActions'
//  Components
import LandingPage from '../components/views/LandingPage/LandingPage'
import Home from '../components/views/Home/Home'
import  Login from '../components/views/auth/Login/Login'
import Register from '../components/views/auth/Register/Register'
import Error404 from '../components/views/error/Error404'
import Chat from '../components/views/Chat/Chat'

const RequireAuth = ({ children }) => {
    const contacts = ["user1", "user2", "user3", "user4"]
    const dispatch = useDispatch()
    if (sessionStorage.getItem("user")) {
        let tempUser = JSON.parse(sessionStorage.getItem("user"))
        localStorage.setItem("user", tempUser?.id)
    }else{
        return <Navigate to="/login" replace={true} />
    }
    return children

  }
  
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
                <Route exact path='/register' element={
                    <motion.div
                        className="page"
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={pageTransition}
                    >
                        <Register/>
                    </motion.div>
                }/>
                <Route exact path='/home' element={
                    <RequireAuth>
                        <motion.div
                            className="page"
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransition}
                            >
                            <Home/>
                        </motion.div>
                    </RequireAuth>
                }/>
                <Route exact path='/chat' element={
                    <RequireAuth>
                        <motion.div
                            className="page"
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransition}
                            >
                            <Chat/>
                        </motion.div>
                    </RequireAuth>
                }/>
                
                <Route path='*' element={
                    <motion.div
                        className="page"
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={pageTransition}
                    >
                        <Error404/>
                    </motion.div>
                }/>
            </Routes>
        </AnimatePresence>
    )
}

export default index
