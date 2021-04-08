import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
export default function NavigationItems()
{
    return(
        <div>
         <ul className="NavigationItems">
        <NavigationItem link="/" active >Burger Builder</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>
        </ul>   
        </div>
    );
}