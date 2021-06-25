import React, { useState } from 'react';
import ItemTarjeta from './ItemTarjeta.js'
import { CardDeck } from 'react-bootstrap';

function Items() {
    const articulos = [
        {id: 1, nombre: 'pizza', precio: 150, foto: 'https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/pizzerias_g_980_5.jpg'},
        {id: 2, nombre: 'hamburguesa', precio: 80, foto: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2010/08/hamburguesa-huevo.jpg'},
        {id: 1, nombre: 'papas fritas', precio: 50, foto: 'https://s1.eestatic.com/2015/03/10/cocinillas/cocinillas_17008413_127305534_854x640.jpg'}
    ]
    const [QItems, setQItems] = useState(0);

    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            setQItems(articulos.length);
            console.log(QItems);
        }, 2000);
    })
    promise.then(console.log('Ya esperé'));
    return (
    <div>
    {QItems > 0 ? (
        articulos.map((i) => {
        return (
            <ItemTarjeta id={i.id} nombre={i.nombre} precio={i.precio} foto={i.foto} />
        );
        })
        ) : ( <div />)
    }
    </div>
)}

export default Items