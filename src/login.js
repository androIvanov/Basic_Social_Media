import React from 'react';
import './loginForm.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="loginFrom">
            <label className="labelOne">Username or Email</label>
            <input className="input" name="username"></input>
            <label className="labelTwo">Password</label>
            <input className="input" name="pass"></input>
            <button className="submitter">Login</button>
            <span className="bottomSpan" >Don't have an account yet? <Link className="registerLink" href="/register" to="/register">Register Now!</Link></span>
        </div>
    );
}

export default Login