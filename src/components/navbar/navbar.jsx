import React from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="navbar">
                <nav>
                <ul>
                    <li>
                        <a href="#"> Zatch Bell </a>
                        <NavLink exact to="/" activeClassName="active">Zatch Bell</NavLink>
                    </li>
                    <li>
                        <a href="#"> Personajes </a>
                        <NavLink exact to="charDetail" activeClassName="active">Personajes</NavLink>
                    </li>
                    <li>
                        <a href="#"> Creador </a>
                        <NavLink exact to="/about" activeClassName="active">About</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}