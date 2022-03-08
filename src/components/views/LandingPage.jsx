import React from 'react'
import { useNavigate } from 'react-router';
import '../css/LandingPage.css'

const LandingPage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/main')
    return (
        <div class='container'> 
            <div class='landing'></div>
            <div class='landing2'>
            <button class='btn third' onClick={handleOnClick}>Welcome to the paradise</button>
            </div>
        </div>
    )
}

export default LandingPage
