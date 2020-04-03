import React from 'react';
import axios from 'axios';
import FixedTable from '../components/FixedTable.js'


export default class ListPokemon extends React.Component {
    state = {
      pokemon: [],
      detail: [],
    }   

    componentWillMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(res => {
            const pokemons = res.data.results;
            const urlDetail = Array.from(pokemons,x=>x.url)
            console.log(res.data)
            this.setState({pokemon : pokemons});
            Promise.all(urlDetail.map(u=>axios.get(u))).then(responses =>
                this.setState({detail:responses})
            )
            console.log(this.state.pokemon)
            console.log(this.state.detail)
        })
    }

    render() {
        console.log(this.state.pokemon[0])
        console.log(this.state.detail[0])
        return(
            <FixedTable rows={this.state}></FixedTable>
            // <TableMd></TableMd>
            // <ul>
            //     { this.state.pokemon.map(pokemon => <li>{pokemon.name}</li>) }
            // </ul>
        )
    }
}