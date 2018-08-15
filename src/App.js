import React, { Component } from 'react';
import PlayerForm from './components/playerForm/PlayerForm';
import TeamInfo from './components/teamInformation/TeamInformation';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      substitutes: []
    }
  }

  render() {
    return (
      <div className="app">
        <PlayerForm />
        <TeamInfo />
      </div>
    );
  }
}

export default App;
