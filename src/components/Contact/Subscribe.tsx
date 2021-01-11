import React from 'react'
import './contact.css';

export const Subscribe = () => {
    return (
        <div className="contact">
            <div className="contactMainDiv">
            <h3>Subscribe to get new updates</h3>
            <p>Tesla will notify you through an alert on your car's touchscreen and Tesla mobile app.</p>
            </div>
            <div className="contentForm">
                <br />
                <input 
                  type="text"
                  placeholder="Email Address"
                />
                <br />
                <textarea 
                  placeholder="Comments..."
                />
                <br />
                <button className="contentBtn">Submit</button>
            </div>
        </div>
    )
}
