import React from "react";
import Data from '../../data.json';

export default class CharacterDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentElement: Data.Characters[0],
        }
        console.log(this.state)
    }

    modificarPersonaje = (e) =>{
        this.setState(() =>{
            return{
                currentElement: Data.Characters.find(
                    (personaje) => personaje.nombre == e.target.value),
            }
        })
    }

    render(){
        return(
            <div>
                <select id="Select" onChange={(event)=> this.modificarPersonaje(event)}>
                    {this.props.personajes.map((e) => {
                        return <option value={e.nombre} > {e.nombre} </option> 
                    })}
                </select>
                <div>
                    <img src={this.state.currentElement.photo} alt="" />
                </div>
                <div>
                    <h2>Personaje: </h2>
                    <p><b>Nombre:</b> {this.state.currentElement.nombre}</p>
                    <p><b>Genero:</b> {this.state.currentElement.genero}</p>
                    <p><b>Edad:</b> {this.state.currentElement.edad}</p>
                    <p><b>Raza:</b> {this.state.currentElement.raza}</p>
                    <p><b>Personalidad:</b> {this.state.currentElement.personalidad}</p>
                    <p><b>compañero:</b> {this.state.currentElement.compañero}</p>
                    <p><b>Elemento:</b> {this.state.currentElement.elemento}</p>
                    <p><b>Color de libro:</b> {this.state.currentElement["color de libro"]}</p>
                    <p><b>Familia:</b> {this.state.currentElement.familia}</p>
                </div>
            </div>
        )
    }
}