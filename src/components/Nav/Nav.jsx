import React from 'react'
// import SearchBar from './SearchBar'
import styles from './Nav.module.css'
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
    return (
        <nav className={styles.navContainer}>
            
               <p className={styles.el}>info</p>
               <p className={styles.el}>eventos</p>
               <p className={styles.el}>chat</p> 
        </nav>
    )
}

export default Nav