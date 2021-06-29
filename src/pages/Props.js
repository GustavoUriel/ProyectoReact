import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Props.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function Props() {
    const param = useParams().prop_id
    console.log(param);
    console.log(param.length)

return (
    <div>
        <h1>{param}</h1>
        <div>Si el parámetro del selector tiene hasta 7 caracteres se muestra un texto, si tienen más de 7 caracteres se muestra otro. El parámetro de Seguro del hogar tiene 7 caracteres.</div>
        {param.length>7? 
        <div>El parámetro tiene más de 7 caracteres</div>
        :
        <div>El parámetro tiene hasta 7 caracteres</div>
        }
    </div>
)
}