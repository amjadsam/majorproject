import React from "react";
import "./../../index.css";
export default function Layout(props)
{
    return(
        <div>
            <div>toolbar, side drawer,Backdrop</div> 
            <main className="main">
            {props.children}
            </main>
        </div>
    );
}