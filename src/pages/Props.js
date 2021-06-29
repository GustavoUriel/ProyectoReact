import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Props.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function Props() {
    console.log(useParams());

    return (
        <div>
            {useParams().prop_id}
        </div>
    )
}
