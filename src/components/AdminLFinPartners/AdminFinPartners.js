import React from 'react';
import { Partners } from '../Partners/Partners';
import { AdminLogistics } from '../AdminLogistics/AdminLogistics';
import { Finance } from '../Finance/Finance';
import classes from './AdminFinPartners.module.css';

export const AdminFinPartners = () => {
    return (
        <div className={classes.alfp_section}>
            <AdminLogistics/>
            <Finance/>
            <Partners />
        </div>
    )
}
