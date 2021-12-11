import React from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.home}>
            <Header />
            <MainContent />
        </div>
    )
}

export default Home
