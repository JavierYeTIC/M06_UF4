import React from "react";
import "./button.css"; 

function Button({ text, onClick, esClick }) {
    const className = esClick ? 'btnClick' : 'btnReiniciar';
    return <button className={className} onClick={onClick}>{text}</button>;
  }
  
  export default Button;