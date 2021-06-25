import React from 'react'
import Items from './Items.js'

function ContenedorDeItems(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.Titulo}</h1>
            <Items />
        </div>
    );
}

export default ContenedorDeItems