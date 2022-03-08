import React from 'react'
// import SearchBar from './SearchBar'
import styles from '../css/Nav.module.css'
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.navContainer}>
            {/* <div>
            <h2>Order</h2>
            </div> */}
            <a className={styles.sullivan}></a>
        </div>
    )
}

export default Nav