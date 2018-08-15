import React, { Component } from 'react';
import PlayerForm from './components/playerForm/PlayerForm';
import TeamInfo from './components/teamInformation/TeamInformation';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
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
      substitutes: []
    }
  }

  render() {
    return (
      <div className="app">
        <h2>Blue Star Sports Team Manager</h2>
        <PlayerForm />
        <TeamInfo players={this.state.players} />
      </div>
    );
  }
}

export default App;
