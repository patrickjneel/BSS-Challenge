import React, { Component} from 'react';
import './player-form.css';


class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unique: {}
    }
  }

  addProperty = (event) => {
    const { name, value } = event.target;
    const uniqueKey = `${name}-${value}`;
    this.setState({ [uniqueKey]: true })
  }


  render() {
    
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
          onChange={this.addProperty}
          name='last'
        />
        <button 
          className='submit-btn' onClick={() => this.props.addPlayer(this.state)}>
            Submit Player
          </button>
      </div>
    )
  }
}

export default PlayerForm;
