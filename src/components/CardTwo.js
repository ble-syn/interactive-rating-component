import React from "react";
import {ReactComponent as Star} from "../assets/illustration-thank-you.svg";


function CardTwo ({value}){
    return (
    <div className="card-container cardTwo">  
        < Star />
         
        <p className="cardtwotext">You selected {value} out of 5</p>

        <h2 className="card-header">Thank You!</h2>
        <p className="card-text">  
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>
   )
}
export default CardTwo