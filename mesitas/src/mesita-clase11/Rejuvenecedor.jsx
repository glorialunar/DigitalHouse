import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Style from './Rejuvenecedor.module.css'

export default function Mesita11(){
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name === '' || age < 10)
            Swal.fire({
                icon: 'info',
                html: 
                    '<b>Valores invalidos</b><br>' +
                    'Ingresa un nombre o una edad mayor a 10'
            })
        else{
            const newAge = age - 10;
            Swal.fire({
                title: '<strong>WOW ' + name + ' <i>rejuveneciste!!</i></strong>',
                html: 'Ahora tu nueva edad es: ' + newAge,
            })
        }
    }

    return (
        <>
            <h1>Rejuvenecedor</h1>
            <form onSubmit={handleSubmit} className={Style.form}>
                <label>Name: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Age: </label>
                <input 
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button type='submit'>Submit</button>
                
            </form>
        </>
    )
}

