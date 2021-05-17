import React from 'react'
import '../Login/login.css'

const Login = () => {
    return (
        <div className="login">
            
            <div className="login-content">
            <h1>Login</h1>
                <form method="post" className = "login-form">
                    
                    <div className="input">
                        <input type="text" name="u" placeholder="Username" required="required" />
                    </div>
                    <div className="input">
                        <input type="password" name="p" placeholder="Password" required="required" />
                    </div>
                    <div className="container-button">
                        <div >
                            <button type="submit" className="login-button">Login</button>
                        </div>   
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default Login
