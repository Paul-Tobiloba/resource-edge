import React from 'react'
import { Card } from '../UI/Card/Card'
import classes from './AdminLogistics.module.css'
import icon1 from '../../assets/images/Logistics.svg'
import icon2 from '../../assets/images/asset.svg'
import DirectReports from '../../assets/images/Direct Reports-List.png'

export const AdminLogistics = () => {
    return (
        <div className={classes.admin_section}>
            <div className={classes.admin_section_container}>
                <div className={classes.admin_section_text}>
                    <h2 className={classes.admin_title}>Admin & Logistics</h2>
                    <p>Manage and track company assets as well as logistics for travelling employees</p>
                </div>
                <div className={classes.admin_section_cards}>
                    <Card className={classes.hr_content__card}
                        title="Travel & Logistics"
                        description="Make travel requests, get approvals, and have access to travel information."
                        icon={icon1}
                    />
                    <Card className={classes.hr_content__card}
                        title="Asset Management"
                        description="Manage the acquisition, assignment, and disposition of assets seamlessly."
                        icon={icon2}
                    />
                </div>
            </div>
            <div className={classes.admin_snapshot}>
                <img src={DirectReports} alt="Admin Snapshot" />
            </div>
        </div>
    )
}
