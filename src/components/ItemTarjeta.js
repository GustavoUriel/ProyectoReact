import React from 'react';
import { Card } from 'react-bootstrap';

function ItemTarjeta(props) {
    console.log (props);
    return (
        <Card style={{ width: '40rem', margin: '10px' }}>
            <Card.Img variant="top" src={props.foto} />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>A {props.precio} pesos la unidad</Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ItemTarjeta;
