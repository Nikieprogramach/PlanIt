// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home