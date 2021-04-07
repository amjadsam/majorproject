import React from "react";
import Toolbar from "./../navigation/toolbar/toolbar";
import "./../../index.css";
export default function Layout(props)
{
    return(
        <div>
            <Toolbar/>
            <main className="main">
            {props.children}
            </main>
        </div>
    );
}