import React from 'react'
import { useNavigate } from 'react-router';
import './LandingPage.styles.css'

const LandingPage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/main')
    return (
        <div class='container'> 
            <section class='section uno'>
                <p>#Guaderia Sullivan</p>
                <div id='img1'></div>
                {/* <img id='img1' src='https://lh3.googleusercontent.com/pw/AM-JKLUhUF8Vm2p2-GAdXUW3SeF_iBZ_HlvGDJpHGkT4lzS8qUiuykV-N4wvXppH0lOfSmqK4Y5vYIyh5kBN5QyAuHw0_kwtdHxLtNDH2E5bzuDY3urjx4tUpK8LZNGS2_KuIh6sNcS2MXcFlT8OtrhnNUIE=w534-h695-no?authuser=0'/> */}
            </section>
            <section class='section dos'>
                <div id='img2'></div>
                <p>Sullivan Kinder <br/>2021 </p>
            </section>
            <section class='section tres'>
                <p id='p1'>#SullivanFriends</p>
                <p id='p2'>for ever</p>
                <div id='img3'></div>
            </section>
            <button class='btn third' onClick={handleOnClick}>Welcome to the paradise</button>
        </div>
    )
}

export default LandingPage
