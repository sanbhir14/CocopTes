import React from 'react';
import axios from 'axios';
import FixedTable from './FixedTable.js'

export default class ListPokemon extends React.Component {
    state = {
      pokemon: [],
      count: []
    }

    componentWillMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(res => {
            const pokemons = res.data.results;
            console.log(res.data)
            this.setState({pokemon : pokemons});
            console.log(this.state.pokemon)
        })
    }

    render() {
        console.log(this.state)
        return(
            <FixedTable rows={this.state.pokemon}></FixedTable>
            // <ul>
            //     { this.state.pokemon.map(pokemon => <li>{pokemon.name}</li>) }
            // </ul>
        )
    }
}