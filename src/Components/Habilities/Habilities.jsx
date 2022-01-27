import React from "react";
import "./Habilities.css";

const Habilities = ({ habilities }) => {

    return(
        <div className="habilities">
            <h4>Habilities</h4>
            <ul>
                {
                habilities.map((item) => {
                
                    return (
                        <li key={item}>
                         {item}
                        </li>
                    );
                })
                }
            </ul>            
        </div>
    )
}

export default Habilities;