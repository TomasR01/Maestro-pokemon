import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const Pokemon = () => {

  const [pokemon, setPokemon] = useState([])
  const [optionSelected, setOptionSelected] = useState("")

  useEffect(()=>{
    apiRequest()
  }, [])

  async function apiRequest(){
    try{
      const response = await fetch(apiURL + 'pokemon')
      const {results} = await response.json()

      setPokemon(results)
    } catch (error){
      console.log(error)
    }
  }

  const handleSelect = ({target : {value}})=> setOptionSelected(value)

  const searchPokemon = useNavigate()

  const goToDetails = () => {
    if(!optionSelected){
      alert('Debes seleccionar un Pokemón')
    } else {
      searchPokemon(`/pokemon/${optionSelected}`)
    }
  }

  return (
    <>
      <h1 className='baseCenter'>Maestro Pokemón</h1>
      <section className='baseCenter'>
        <h2>Selecciona tu Pokemón</h2>
        <select onChange={(e) => handleSelect(e)}>
          <option defaultValue value=''>Selecciona un Pokemón</option>
          {pokemon?.map((pokemon) => (
            <option value={pokemon.url.split('/')[6]} key={pokemon.url}>{pokemon.name ? pokemon.name[0] + pokemon.name.substring(1) : ''}</option>
          ))}
        </select>
        <br></br>
        <button onClick={goToDetails}>Buscar</button>
      </section>
    </>
  );
};
export default Pokemon;