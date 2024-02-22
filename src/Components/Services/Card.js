import React from 'react';
import "./Card.css"

function Card({imgsrc, title, detail, color}) {
    return (
            <div className="card" style={{borderColor: {color}}}>
                    <img src= {imgsrc} alt=" " />
                    <span >{title}</span>
                    <span >{detail} </span>
                    <button className="btn btn-primary">LEARN MORE </button>
            </div>
    )
}
export default Card;
