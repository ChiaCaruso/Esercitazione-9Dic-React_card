import React from "react";
import './style.css';

const Sizes = ({title, size1, size2, size3}) => (
    <div className="sizes__box">
        <h3>{title}</h3>
        <ul className="circle__item">
            <li className="circle circle--active">{size1}</li> 
            <li className="circle">{size2}</li>
            <li className="circle">{size3}</li>
        </ul>
    </div>
)

export default Sizes;