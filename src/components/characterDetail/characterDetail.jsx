import React from "react";
import Data from '../../data.json';
import {useState, useEffect} from "react";

export default function charDetail(props){

    const[selected, setSelected] = useState(Data.Characters[0]);
    const[characters, setCharacters] = useState([]);

    useEffect(() =>{
        setCharacters(Data.Characters);
        setSelected(Data.Characters[0]);
    }, [Data.Characters, personajes]);
/*
    modificarPersonaje = (e) =>{
        this.setState(() =>{
            return{
                currentElement: Data.Characters.find(
                    (personaje) => personaje.nombre == e.target.value),
            }
        })
    }
*/
    const onChangeInput = (e) => {
        setSelected(
            Data.Characters.find(
                (personaje) => personaje.id == e.target.value)
        )
    }
   
     return(
            <div>
                <select id="Select" onChange={(event)=> this.onChangeInput(event)}>
                    {this.props.personajes.map((e) => {
                        return <option value={e.id} > {e.id} </option> 
                    })}
                </select>
                <div>
                    <img src={selected.photo} alt="" />
                </div>
                <div>
                    <h2>Personaje: </h2>
                    <p><b>Nombre:</b> {selected.nombre}</p>
                    <p><b>Genero:</b> {selected.genero}</p>
                    <p><b>Edad:</b> {selected.edad}</p>
                    <p><b>Raza:</b> {selected.raza}</p>
                    <p><b>Personalidad:</b> {selected.personalidad}</p>
                    <p><b>compañero:</b> {selected.compañero}</p>
                    <p><b>Elemento:</b> {selected.elemento}</p>
                    <p><b>Color de libro:</b> {selected["color de libro"]}</p>
                    <p><b>Familia:</b> {selected.familia}</p>
                </div>
            </div>
        )   
    
}