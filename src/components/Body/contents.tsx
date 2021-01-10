import React from 'react'
import symbol from '../../images/symbol.jpg';
import car1 from '../../images/car1.jpg';
import './body.css'

export const Contents = () => {
    return (
        <div className="contents">
        <div className="logoCont">
            <img src={symbol} alt="logo" width="20%"/>
        </div>
        {/* /// */}
        <div className="contentsBody">
            <div className="contentsHead">
            <h3>Model-Y</h3>
            <p>Model-Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.The Tesla Model-Y is an excellent crossover vehicle. It successfully builds on the style,technology, and value pioneered by the Model 3 sedan as it brings new functionality to buyers who want the look, and the capability of an SUV.</p>
            </div>
            <img src={car1} alt=""width="100%"/>
        </div>
        </div>
    )
}
