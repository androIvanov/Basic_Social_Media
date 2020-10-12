import React from 'react';
import {Link} from 'react-router-dom';

function StatusBar(){
    return(
        <div className="statusBar">
        <span className="outLabel">Logged OUT</span>
        <button className="login" ><Link className="loginLink" to="/login">LogIn</Link></button>
        <div className="userInfo">
            <span className="usernameLabel">Username: </span>
            <span className="username">Jax</span>
            <button className="logout">Logout</button>
        </div>
    </div>
    );
}

export default StatusBar;