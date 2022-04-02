import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    static defaultProps = {
      pokemon : [
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 5, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 7, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 8, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62},

     ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
                </div>
               
            </div>
        );
    }
}

export default Pokedex;