import React, { Component} from 'react';
import randomString from 'randomstring';
import './player-form.css';


class PlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      unique: {
      }
    }
  }

  addProperty = (event) => {
    const rando = randomString.generate(6)
    const uniqueKey = `${event.target.name}-${event.target.value}`;
    this.setState({ unique: uniqueKey })
  }

  render() {
    console.log(this.state)
    return (
      <div className='create-form'>
        <input 
          className='team-name player-input' 
          placeholder='Enter Team Name'
          onChange={this.addProperty}
          name='team'
        />
        <input 
          className='first-name player-input' 
          placeholder='Enter Players First Name'
          onChange={this.addProperty}
          name='first'
        />
        <input 
          className='last-name player-input' 
          placeholder='Enter Players Last Name'
          name='last'
        />
        <button 
          className='submit-btn' onSubmit={this.addProperty}>
            Submit Player
          </button>
      </div>
    )
  }
}

export default PlayerForm;
