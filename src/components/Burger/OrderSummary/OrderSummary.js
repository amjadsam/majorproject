import React from "react";
export default function OrderSummary(props)
{
    return(
        <div>
              <h3>Your Order</h3>
            <p>A delicious burger with the following Incredients:</p>
            {Object.keys(props.ingredients).map((el)=>{
                return (
                    <li key={el}>
                        <span style={{textTransform:"capitalize"}}>{el}:{props.ingredients[el]}</span>
                    </li>
                );
            })}
           <b>Pay: {props.finalPrice.toFixed(2)}</b>
           <p>Continue to checkout?</p>
           <button style={{backgroundColor:"red"}} onClick={props.clicked}>CANCEL</button>
           <button style={{backgroundColor:"green"}} >Continue</button>
      </div>
    );
}