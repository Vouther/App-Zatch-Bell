import React from "react";
import { useState } from "react";
import "./about.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function ValidForm(formC){
    let error = {}

    if (formC.email === ""){
        error.email ="Debe ingresar un email"
    }else if(!/\S+@\S+\.\S+/.test(formC.email)){
        error.email ="El email ingresado es incorrecto"
    }

    if(formC.asunto ===""){
        error.asunto ="Debe ingresar un asunto"
    }else if(formC.asunto.length<10){
        error.asunto ="Debe ingresar al menos 10 caracteres"
    }

    if(formC.mensaje ===""){
        error.mensaje ="Debe agregar un mensaje"
    }else if(formC.mensaje.length>256){
        error.mensaje ="Se supero el maximo de 256 caracteres"
    }

    return error;
}

//********************************************************************** */

export default function ControlledForm() {
  const [formulario, setForm] = useState({
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [error, setError] = useState({
    email: "Debe ingresar un email",
    asunto: "Debe ingresar un asunto",
    consulta: "debe ingresar un mensaje",
  });

  const handleChange = (e) => {
    setForm({
      ...formulario,
      [e.target.name]: e.target.value,
    });

    setError(ValidForm(
        {...formulario,
            [e.target.name]: e.target.value,}
    ));

  };

  return (
    <Container>
      <h2>Contacto</h2>
      <Form className="containerAbout">
        <h3>Formulario de contacto</h3>
        <div>
          <label for="email"> Email: </label>
          <input
            onChange={(event) => handleChange(event)}
            id="email"
            type="email"
            name="email"
          />
          <p className="error">{error.email}</p>
        </div>
        <div>
          <label for="asunto"> Asunto: </label>
          <input
            onChange={(event) => handleChange(event)}
            id="asunto"
            type="text"
            name="asunto"
          />
          <p className="error">{error.asunto}</p>
        </div>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}