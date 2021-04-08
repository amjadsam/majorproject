import React from "react";
import "./toolbar.css";
import Logo from "./../../../components/Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
export default function Toolbar()
{
    return(
        <header className="Toolbar">
            <div>MENU</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}