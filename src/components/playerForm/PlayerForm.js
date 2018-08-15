import React, { Component} from 'react';
import randomString from 'randomstring';
import './player-form.css';

// let rando = randomString.generate(6)

class PlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      unique: {},
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className='create-form'>
        <input 
          className='team-name player-input' 
          placeholder='Enter Team Name'
          onChange={this.handleChange}
        />
        <input 
          className='first-name player-input' 
          placeholder='Enter Players First Name'
        />
        <input 
          className='last-name player-input' 
          placeholder='Enter Players Last Name'
        />
        <button className='submit-btn'>Submit Player</button>
      </div>
    )
  }
}

export default PlayerForm;
