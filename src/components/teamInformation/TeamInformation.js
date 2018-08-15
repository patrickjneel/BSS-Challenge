import React from 'react';

const TeamInfo = ({active}) => {
  const displayTeam = active.map((player, index) => {
    return (
      <div className='card' key={index}>
        <h3>Team Name: {player.team}</h3>
        <h4>First Name: {player.first}</h4>
        <h4>Last Name: {player.last}</h4>
        <h4>Id: {player.id}</h4>
        <h4>Status: Active</h4>
      </div> 
    )
  })

  return (
    <div className='team-info'>
      {displayTeam}
    </div>
  )
}

export default TeamInfo;
