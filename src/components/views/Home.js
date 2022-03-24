import React from 'react';
import Nav from '../Nav/Nav';
import Networks from '../Networks/Networks';
import style from './Home.module.css'



const Home = () => {
  return <div className={style.home}>
    <Nav></Nav>
    <div className={style.sullivan}></div>
    <div className={style.mision}></div>
    <Networks></Networks>
  </div>;
};

export default Home;
