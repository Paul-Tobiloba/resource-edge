import React from 'react'
import { AdminFinPartners } from '../AdminLFinPartners/AdminFinPartners'
import HeroSection from '../HeroSection/HeroSection'
import HrSection from '../HumanResource/HrSection'


const MainContent = () => {
    return (
        <div className="main-content">
            <HeroSection/>
            <HrSection/>
            <AdminFinPartners/>
        </div>
    )
}

export default MainContent
