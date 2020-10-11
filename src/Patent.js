import React from 'react';
import Article from './article.js';
import './style.css';
import './articleStyle.css';

function Parent() {
    return (
        <div>
            <div className="container">
                <div className="statusBar">
                    <span className="outLabel">Logged OUT</span>
                    <button className="login">LogIn</button>
                    <div className="userInfo">
                        <span className="usernameLabel">Username: </span>
                        <span className="username">Jax</span>
                        <button className="logout">Logout</button>
                    </div>
                </div>

                <div className="content">
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                    <Article title="Five series facelift releses new year!" author="Jax" category="Cars" text="CarsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                </div>

                <div className="bottom">
                    <a href="#">About us</a>
                    <a href="#">Contacts</a>
                    <a href="#">Location</a>
                    <a href="#">Cause</a>
                </div>
            </div>
        </div>
    );
}
export default Parent;