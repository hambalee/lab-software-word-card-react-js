import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
//import _ from 'lodash';

export default class WordCard extends Component {
    activationHandler = c => { console.log(`${c} has been activated.`) }
render() {
    return (
        <div>
        {
            
            Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>)

            
        }
    
        </div>
    );
 }
}

