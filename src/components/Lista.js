import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";

const Lista = (props) => {
  return (
    <div className="container">
      <ListGroup>{
       props.arregloTareas.map((item, posicion)=> <Item key={posicion} tareaCargada={item} borrarTarea={props.borrarTarea}></Item>)
        }
        
      </ListGroup>
    </div>
  );
};

export default Lista;
