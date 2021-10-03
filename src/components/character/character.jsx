import React from "react";
import {NavLink} from "react-router-dom";

export default class Character extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <NavLink to={`/charDetail/${props.personaje.id}`}>
                        <img src={this.props.personaje.imagen} />
                    </NavLink>
                </div>
                <div>
                    <NavLink to={`/charDetail/${props.personaje.id}`}>
                        <b>{this.props.personaje.nombre}</b>
                    </NavLink>
                </div>
            </div>
        )
    }
}