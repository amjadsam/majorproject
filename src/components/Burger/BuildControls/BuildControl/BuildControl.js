import React from "react";
import "./BuildControl.css";
export default function BuildControl(props)
{
    return(
        <div className="BuildControl">
        <div className="Label" >{props.label}</div>
        <button className="Less"  onClick={()=>props.ingredientHandlerRemover(props.type)} >Less</button>
        <button className="More" onClick={()=>props.ingredientHandler(props.type)} >More</button>
        </div>
    );
}