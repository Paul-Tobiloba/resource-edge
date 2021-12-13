import React from 'react'
import Navbar from '../components/UI/Navbar/Navbar'
import {DashboardMain} from '../components/DashboardMain/DashboardMain'
import classes from './Dashboard.module.css';

const Dashboard = () => {


    return (
        <div className={classes.dashboard}>
            <Navbar  />
            <DashboardMain />
        </div>
    )
}

export default Dashboard
