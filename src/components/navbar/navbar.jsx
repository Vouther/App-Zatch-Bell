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
                        <NavLink exact to="/" activeClassName="activo">Zatch Bell</NavLink>
                    </li>
                    <li>
                        <a href="#"> Personajes </a>
                        <NavLink exact to="/charDetail" activeClassName="activo">Personajes</NavLink>
                    </li>
                    <li>
                        <a href="#"> About </a>
                        <NavLink exact to="/about" >About</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}