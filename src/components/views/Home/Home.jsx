import React from 'react';
import Nav from '../../Nav/Nav';
import Networks from '../../Networks/Networks';
import './Home.styles.css'



const Home = () => {
  return <div className="home">
    <Nav></Nav>
    <div className="sullivan"></div>
    <div className="mision"></div>
    <Networks></Networks>
  </div>;
};

export default Home;
