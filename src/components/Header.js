import React from 'react';
import headerLogo from "../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c (1).svg"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
            <section id="header">
                <div className="container">
                    <section className="header">
                        <div>
                            <img src={headerLogo} alt=""/>
                        </div>
                        <div className="header-menu">
                            <NavLink to={"/popular"}>Popular</NavLink>
                            <NavLink to={"/playing"}>Now Playing</NavLink>
                            <NavLink to={"/rated"}>Top Rated</NavLink>
                        </div>
                    </section>
                </div>
            </section>
    );
};

export default Header;