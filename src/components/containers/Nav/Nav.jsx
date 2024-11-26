import React, { useState, useRef} from 'react'
import { useResize } from '../../../hooks/useResize'
import './Nav.styles.css'

const Nav = () => {
    const { isPhone } = useResize()
    const [ active, setActive ] = useState(false)
    const refIndicator = useRef()

    const handleIndicator= (value, background) => {
        refIndicator.current.style.transform = `translateY(calc(60px * ${value})`
        refIndicator.current.style.background= background
    }
    return (
        <nav className={isPhone? `navMovil ${active?'active':'not-active'}` : 'navContainer'} onClick={isPhone?()=>setActive(!active):null}>
                {isPhone? 
                    <>
                        <div className='box--spans'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>       
                        <ul>
                            <li className="list" onMouseEnter={()=>handleIndicator(0, "#ff7979")}>
                                <a href="/home">
                                    <span className="icon"><i className="fa-solid fa-house"></i></span>
                                    <span className="title">Home</span>
                                </a>
                            </li>
                            <li className="list" onMouseEnter={()=>handleIndicator(1, "#ffff77" )}>
                                <a href="/profile">
                                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                                    <span className="title">Profile</span>
                                </a>
                            </li>
                            <li className="list" onMouseEnter={()=>handleIndicator(2, "#4aff4a")}>
                                <a href="/chat">
                                    <span className="icon"><i className="fa-solid fa-comment"></i></span>
                                    <span className="title">Message</span>
                                </a>
                            </li>
                            <li className="list"data-color="#6fc8ff" onMouseEnter={()=>handleIndicator(3, "#00759c7f" )}>
                                <a href="#">
                                    <span className="icon"><i className="fa-solid fa-circle-question"></i></span>
                                    <span className="title">Help</span>
                                </a>
                            </li>
                            <li className="list" onMouseEnter={()=>handleIndicator(4, "#ff7bf8")}>
                                <a href="#">
                                    <span className="icon"><i className="fa-solid fa-gear"></i></span>
                                    <span className="title">Settings</span>
                                </a>
                            </li>
                            <div className="indicator" ref={refIndicator}></div>
                        </ul>
                    </>
                :
                    <>
                        <ul>
                            <li>
                            <a href='/home'>Home</a>
                            <span></span>
                            </li>
                            <li>
                            <a href='#'>Info</a>
                            <span></span>
                            </li>
                            <li>
                            <a href='/chat'>Chat</a>
                            <span></span>
                            </li>
                        </ul>
                        {/* <div className="background"></div> */}
                    </>
                }    
        </nav>
    )
}

export default Nav