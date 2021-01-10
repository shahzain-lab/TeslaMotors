import React from 'react';
import './header.css';
//img

export const Header = () => {
    return (
        <div className="header">
         <h4>Make your journey with <br /><span className="tesla-head">Tesla</span></h4>
         <div className="Modelfeatures">
             <h5>Acceleration <br /> <span className="features">60|MPH</span> <br />in 2.4 second</h5>
             <h5>Battery <br /> <span className="features">1000|KWH</span> <br /> of 8 year</h5>
             <h5>Range <br /> <span className="features">244|miles</span> <br /> of 255 Wh/mi</h5>
         </div>
        </div>
    )
}
