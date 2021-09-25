import React from "react";

export default class Character extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <img src={this.props.personaje.imagen} />
                </div>
                <div>
                    <b>{this.props.personaje.nombre}</b>
                </div>
            </div>
        )
    }
}