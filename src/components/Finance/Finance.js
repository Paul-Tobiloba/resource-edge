import React from 'react'
import { Card } from '../UI/Card/Card'
import classes from './Finance.module.css'
import icon1 from '../../assets/images/RE_Vouchers.svg'
import icon2 from '../../assets/images/Payroll.svg'
import Snapshot from '../../assets/images/Payroll_Snapshot.png'

export const Finance = () => {
    return (
        <div>
            <div className={classes.finance_section}>
                <div className={classes.finance_section_container}>
                    <div className={classes.finance_section_text}>
                        <h2 className={classes.finance_title}>Finance</h2>
                        <p>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
                    </div>
                    <div className={classes.finance_section_cards}>
                        <Card className={classes.finance_content__card}
                            title="RE Vouchers"
                            description="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers"
                            icon={icon1}
                        />
                        <Card className={classes.finance_content__card}
                            title="Payroll"
                            description="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."
                            icon={icon2}
                        />
                    </div>
                </div>
                <div className={classes.finance_snapshot}>
                    <img src={Snapshot} alt="Finance Snapshot" />
                </div>
            </div>
        </div>
    )
}
