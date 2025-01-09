import React, { useState } from 'react';


export const CambiarNombre = () => {
  const [nombre,setNombre]=useState("Adrian Campos");
  const cambiarNombre=(nuevoNombre) =>{
	setNombre(nuevoNombre);
  }
  return (
    <>
      	<h1>Mi nombre es: {nombre}</h1>
      <button onClick={e => cambiarNombre("otro nombre")}>Botón</button>
    </>
  );
};