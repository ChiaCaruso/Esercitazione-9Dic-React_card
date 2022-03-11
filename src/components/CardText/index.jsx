import React from "react";
import './style.css';
import Title from "../Title&Price";
import Paragraph from "../Paragraph";
import Colors from "../Colors";
import Sizes from "../Sizes";
import Button from "../Button";

const CardText = ({title, price, text, titleColors, titleSizes, size1, size2, size3}) => (
    <div className="card__text">
        <Title title={title} price={price} />
        <Paragraph text={text} />
        <Colors title={titleColors} />
        <Sizes title={titleSizes} size1={size1} size2={size2} size3={size3} />
        <Button />
    </div>
)

export default CardText;