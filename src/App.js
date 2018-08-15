import React, { Component } from 'react';
import PlayerForm from './components/playerForm/PlayerForm';
import TeamInfo from './components/teamInformation/TeamInformation';
import randomString from 'randomstring';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: [
        {
          teamName: 'Bears',
          firstName: 'Steven',
          lastName: 'Shit',
        },
        {
          teamName: 'Bears',
          firstName: 'Frank',
          lastName: 'Idiot',
        }
      ],
      subs: []
    }
  }

  addPlayer = (player) => {
    console.log(player)
    const newPlayer = {...player, id: randomString.generate(6) }
    const players = [...this.state.active, newPlayer]
    this.setState({ active: players })
    if(this.state.acitve === 10) {
      this.setState({ subs: players })
    }
  }

  render() {
    return (
      <div className="app">
        <h2>Blue Star Sports Team Manager</h2>
        <PlayerForm active={this.state.active} addPlayer={this.addPlayer} />
        <TeamInfo active={this.state.active} />
      </div>
    );
  }
}

export default App;
