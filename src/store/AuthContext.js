import React, { useState } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    password: '',
    changePassword: () => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        setIsLoggedIn(true)
        setPassword(props.password)
        localStorage.setItem('isLoggedIn', true);
    }

    const changePasswordHandler = (newPassword) => {
        setPassword(newPassword)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }


    const contextValue = {
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        password,
        changePassword: changePasswordHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext;

