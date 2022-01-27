import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
    return (
        <div className="languages">
            <h2>Languages</h2>
            <h4>{languages.language}</h4>
            <p>Writing: {languages.wrlevel}</p>
            <p>Speaking: {languages.splevel}</p>
        </div>
     
  ); 
};

export default Languages;