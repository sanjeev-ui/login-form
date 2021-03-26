import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
        <div>
            {/* <h1 className = "form-group"> Login Form </h1> */}
            <div className = "login-form">
                <div className = "main-div">
                    <div className = "panel">
                        <h2>Admin Login</h2>
                        <p> Please Enter your Email and Password</p>
                    </div>
                    <form id = "Login">
                        <div className = "form-group">
                            <input type = "email" className = "form-control" id = "input-email" placeholder = "Email Address"/>
                        </div>
                        <div className = "form-group">
                            <input type = "password" className = "form-control" id = "inputPassword" placeholder = "Password" />
                        </div>
                        <div className = "forgot">
                            <a href = "reset.html"> Forgot Password?</a>
                        </div>
                        <button type = "submit" className = "btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Login
