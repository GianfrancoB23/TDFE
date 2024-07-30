import React, { useEffect, useState } from 'react'
import Usuario from './Usuario'

const Lista = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(r => r.json())
            .then(datos => {
                setUsuarios(datos.results);
            })
    }, [])

    useEffect(() => {
        //cronometro

        return () => {
            //eliminar cronometro
        }
    }, [])


    return (
        <div>
            <h2>Lista</h2>
            {/* usuarios.map(usuario => <Usuario key={usuario.login.uuid} nombre={usuario.name.first} apellido={usuario.name.last} edad={usuario.dob.age} />) */}
            {usuarios.map(usuario => <Usuario key={usuario.login.uuid} {...usuario} />)}
        </div>
    )
}

export default Lista

/* 
    //La funcion se ejecuta solo si cambia algo de lo que tengo referenciado en el array de dependencias
    useEffect(() => {
    
    }, [dato]);

    //La funcion se ejecuta al cargar el componente
    useEffect(() => {
        
    }, [])
*/

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

localStorage.setItem("apellido", "X");
localStorage.getItem("apellido");
localStorage.clear();