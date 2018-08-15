import React, { Component } from 'react';
import PlayerForm from './components/playerForm/PlayerForm';
import TeamInfo from './components/teamInformation/TeamInformation';
import randomString from 'randomstring';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: [],
      subs: []
    }
  }

  addPlayer = (player) => {
    const newPlayer = {...player, id: randomString.generate(6) }
    const players = [...this.state.active, newPlayer]
    this.setState({ active: players })
    this.setState({ team: '', first: '', last: '' })
  }

  render() {
    return (
      <div>
        <div className="app-top">
          <h2>Blue Star Sports Team Manager</h2>
          <PlayerForm active={this.state.active} addPlayer={this.addPlayer} />
        </div>
        <div className='app-bottom'>
          <TeamInfo active={this.state.active} />
        </div>
      </div>
    );
  }
}

export default App;
