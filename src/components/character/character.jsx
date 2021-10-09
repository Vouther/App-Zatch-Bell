import React from "react";
import {NavLink} from "react-router-dom";

export default function Character (props){
    //constructor(props){
    //    super(props)
    //}
    
    return(
        <div>
                <div>
                    <NavLink exact to={`/charDetail/${props.personaje.id}`}>
                        <img src={this.props.personaje.imagen} />
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to={`/charDetail/${props.personaje.id}`}>
                        <b>{this.props.personaje.nombre}</b>
                    </NavLink>
                </div>
            </div>
        )        
}