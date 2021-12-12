import React from 'react'
import classes from './DashboardMain.module.css'
export const DashboardMain = (props) => {
    return (
        <main>
            <div className={classes.main_text}>
                <h1>Hello, {props.username}</h1>
                <p>Welcome and Good to have you back.</p>
            </div>
            <div className={classes.main_taskList}>
                <h3>Things to do</h3>
                <ul className={classes.main_tasks}>
                    <li className={classes.main_task}>
                        <div className={classes.task_content}>
                            <span className={classes.checkbox}></span>
                            <p className={classes.text}>Upload your employee performance agreement</p>
                        </div>
                        <button className={classes.begin_btn}>Begin</button>
                    </li>
                    <li className={classes.main_task}>
                        <div className={classes.task_content}>
                            <span className={classes.checkbox}></span>
                            <p className={classes.text}>Start quarterly self review</p>
                        </div>
                        <button className={classes.resume_btn}>Resume</button>
                    </li>
                </ul>
            </div>
        </main>
    )
}
