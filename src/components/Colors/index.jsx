import React from "react";
import './style.css';

const Colors = ({title}) => (
    <div className="colors__box">
        <h3>{title}</h3>
        <ul className="circle__item">
            <li className="circle circle1"></li>
            <li className="circle circle2"></li>   
            <li className="circle circle3"></li>
            <li className="circle circle4"></li>
        </ul>
    </div>
)

export default Colors;