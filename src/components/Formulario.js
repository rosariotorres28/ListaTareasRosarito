import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Lista from "./Lista";

const Formulario = () => {
  //aqui va la logica
  // crear un state
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  //ciclo de vida del componente
  useEffect(()=>{
    console.log("prueba de ciclo de vida")
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas))
  }, [arregloTareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde submit");
    //actualizar el arreglo tareas
    setArregloTareas([...arregloTareas, tarea]);
    //invooco a la funcion de mi tarea con comillas vacias para que se limpie y luego agrego value al input con el nombre de mi state
    setTarea("");
  };

  const borrarTarea = (nombre)=>{
   let arregloModificado = arregloTareas.filter((valor) => {return valor !== nombre});
   //actualizar el state
   setArregloTareas(arregloModificado)
  }

  // aqui va el maquetado y un poquito de logica
  return (
    <div>
      <Form onSubmit={handleSubmit} className="container">
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="tarea"
            onChange={(e) => setTarea(e.target.value.trimStart())}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/*aqui invoco a la lista*/}
      <Lista arregloTareas={arregloTareas} borrarTarea={borrarTarea}></Lista>
    </div>
  );
};

export default Formulario;
