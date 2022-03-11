import React from "react";
import './style.css';

const Title = ({title, price}) => (
    <div className="title-price__box">
        <h3>{title}</h3>
        <h3>{price}</h3>
    </div>
)

export default Title;