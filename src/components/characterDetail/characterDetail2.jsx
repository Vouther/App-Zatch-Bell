import React from "react";
import { useParams } from "react-router";

export default function CharacterDetail2(props){
   
    const parametro = useParams();//trae el parametro de la ruta

    const elemento = props.character.find((personaje)=>personaje.id==parametro.id);

    return(
        <div>

            <div className="characterDetail2">
                
                <div>
                    <img src={personaje.imagen} alt="" />
                </div>
                <div>
                    
                    <h2>Personaje: </h2>
                    <p><b>Nombre:</b> {personaje.nombre}</p>
                    <p><b>Genero:</b> {personaje.genero}</p>
                    <p><b>Edad:</b> {personaje.edad}</p>
                    <p><b>Raza:</b> {personaje.raza}</p>
                    <p><b>Personalidad:</b> {personaje.personalidad}</p>
                    <p><b>compañero:</b> {personaje.compañero}</p>
                    <p><b>Elemento:</b> {personaje.elemento}</p>
                    <p><b>Color de libro:</b> {personaje["color de libro"]}</p>
                    <p><b>Familia:</b> {personaje.familia}</p>

                </div>        
            </div>
            
        </div>
    )
    
}