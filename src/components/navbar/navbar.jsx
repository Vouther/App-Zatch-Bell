import React from "react";

export default class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
        <ul>
            <li>
                <a href="#"> Zatch Bell </a>
            </li>
            <li>
                <a href="#"> Personajes </a>
            </li>
            <li>
                <a href="#"> Creador </a>
            </li>
        </ul>
        </>
        )
        
    }
}