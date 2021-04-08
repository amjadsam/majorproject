import React from "react";
import "./toolbar.css";
import Logo from "./../../../components/Logo/Logo";
export default function Toolbar()
{
    return(
        <header className="Toolbar">
            <div>MENU</div>
            <Logo/>
            <nav>
                ...
            </nav>
        </header>
    );
}