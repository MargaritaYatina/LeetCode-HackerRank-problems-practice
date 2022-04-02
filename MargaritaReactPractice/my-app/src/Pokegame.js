import React, { Component } from'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  
       ]
      };
    render(){
        let hand1 =[];
        let hand2 =[ ...this.props.pokemon];
        while (hand1.length<hand2.length){
            let randInd=Math.floor(Math.random() * hand2.length);
            let randPokemon=hand2.splice(randInd, 1) [0];
            hand1.push(randPokemon);
        }
        
        return(
            <div>
                <Pokedex pokemon={hand1} />
                <Pokedex pokemon={hand2} />
            </div>
        )
    }

}

export default Pokegame;