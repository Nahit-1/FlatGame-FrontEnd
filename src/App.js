import React from 'react';
import './App.css';
import GameIndex from './components/GameIndex'
import Nav from './components/Nav';

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Nav />
      <GameIndex />
    </div>
    )}
}

export default App;
