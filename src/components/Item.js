import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Item = (props) => {
    return (
            <ListGroup.Item className= 'd-flex justify-content-between'> {props.tareaCargada}
            <Button variant='danger' onClick={()=> props.borrarTarea(props.tareaCargada)} >Borrar</Button>
            </ListGroup.Item>
            
    );
};

export default Item;