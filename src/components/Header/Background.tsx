import React from 'react';
import './header.css';
import { Header } from './Header';

export const Background = () => {
    return (
        <div className="background">
            <div className="top_left"></div>
            <Header />
            <div className="bottom_right"></div>
        </div>
    )
}
