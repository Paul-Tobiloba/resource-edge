import React from 'react'
import Header from '../components/Header/Header'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.home}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Home
