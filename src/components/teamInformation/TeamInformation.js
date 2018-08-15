import React from 'react';

const TeamInfo = ({active}) => {

  const displayTeam = active.map((player, index) => {
    return (
      <div className='card' key={index}>
        <h3>Team Name: {player.teamName}</h3>
        <h4>First-Name: {player.firstName}</h4>
        <h4>Last Name: {player.lastName}</h4>
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
