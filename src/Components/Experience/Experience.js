import React from 'react';
import './Experience.css';
import Component from './Component';

function Experience() {
    return (
        <>
            <div className="E-container">
              
                <div className="experience" id="experience">
                    <div style={{  left: '25%'}}>
                        <Component text="1+" year="Years" Text="Experience"
                        />
                    </div>
                    <div style={{  left: '35%' }}>
                        <Component text="6+" year="Completed" Text="Projects"
                        />
                    </div>
                    <div style={{  left: '45%' }}>
                        <Component text="2+" year="Years" Text="Experience"
                        />
                    </div>


                </div>
            </div>
        </>


    )
}

export default Experience;
