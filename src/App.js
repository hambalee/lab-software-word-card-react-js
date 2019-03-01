import React, { Component } from 'react';
//import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';

//const word = "Hello"

class App extends Component {
 render() {
 return (
 <div className="App">
  {/*
    Hello World
   <Component2 /> 
  <div>
      <CharacterCard value="h"/>
      <CharacterCard value="i"/>
  </div>
  */}
 
 <div>
 {/*
 Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>)
 */}
 <WordCard value="hello"/>
 </div>

 </div>
 

 );
 }
}
export default App;