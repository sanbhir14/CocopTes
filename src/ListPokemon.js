import React from 'react';
import axios from 'axios';

export default class ListPokemon extends React.Component {
    state = {
      pokemon: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(res => {
            const pokemons = res.data;
            console.log(res.data)
            this.setState({pokemons});
            console.log(this.state.pokemons)
        })
    }

    render() {
        return(
            <ul>
                { this.state.pokemons.map(pokemon => <li>{pokemon.name}</li>) }
            </ul>
            // <p>tes</p>
        )
    }
}