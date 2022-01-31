import React from "react";
import "./Habilities.scss";

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