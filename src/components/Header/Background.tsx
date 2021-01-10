import React from 'react';
import './header.css';
import { Header } from './Header';
import TeslaLogo from '../../images/TeslaLogo.png'

export const Background = () => {
    return (
        <div className="big">
        <div className="background">
            <img className="teslaLogo" src={TeslaLogo} alt="tesla"/>
            <div className="top_left">
            </div>
            <div className="bottom_right"></div>
        </div>
            <Header />
        </div>
    )
}
