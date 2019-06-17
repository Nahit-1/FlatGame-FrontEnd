import React from 'react';
import './App.css';
import GameIndex from './components/GameIndex'
import { Grid } from 'semantic-ui-react';

class App extends React.Component {

  render() {
    return (
    <div className="App">
        <Grid>
          <GameIndex />
        </Grid>
    </div>
    )}
}

export default App;
