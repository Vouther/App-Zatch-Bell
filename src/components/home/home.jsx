import React from "react";
import Character from "../character/character";

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.personajes.map((e,pos)=>{
                    return(<Character personaje={e} key={pos} ></Character>)
                })
                }
            </div>
        )
    }
}