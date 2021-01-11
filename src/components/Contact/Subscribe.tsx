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
              <p>Login to get subscription to our newsletter</p>
                <br />
                <input 
                  type="text"
                  placeholder="Username"
                />
                <input 
                  type="password"
                  placeholder="Enter password"
                />
                <br />
                <input 
                 type="email"
                 placeholder="Enter password"
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
