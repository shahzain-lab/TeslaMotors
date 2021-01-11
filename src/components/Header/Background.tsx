import React from 'react';
import './header.css';
import { Header } from './Header';
import logo from '../../images/logo.jpg'

export const Background = () => {
    return (
        <div className="Front">
        <div className="background">
            <img className="teslaLogo" src={logo} alt="tesla"/>
            <div className="top_left">
            </div>
            <div className="bottom_right"></div>
        </div>
            <Header />
        </div>
    )
}
