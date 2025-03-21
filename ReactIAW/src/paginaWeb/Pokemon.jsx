import React, {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';

export const Pokemon = ({id}) => { const [pokemon, setName] = useState([]);
useEffect(() => { 
fetch("https://pokeapi.co/api/v2/pokemon/"+id) 
.then(res => res.json())  
.then(data => setName( 
{ numero: data.id, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png", imgJuego: data.sprites.front_default, imgCvg: data.sprites.other.dream_world.front_default, nombre: data.name, experiencia: data.base_experience, hp: data.stats[0].base_stat, ataque: data.stats[1].base_stat, defensa: data.stats[2].base_stat, especial: data.stats[3].base_stat, } )); }, []); 
return ( 
<Card style={{height: '500px'}}> 
<h3> Número: {pokemon.numero} - {pokemon.nombre}</h3> 
<img src={pokemon.img} alt="pokemon"/> 
<p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p> 
</Card> 
)}
