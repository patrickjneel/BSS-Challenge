import React from 'react';

const TeamInfo = ({players}) => {

  const displayTeam = players.map((player, index) => {
    return (
      <div className='card' key={index}>
        <h3>{player.teamName}</h3>
        <h4>{player.firstName}</h4>
        <h4>{player.lastName}</h4>
      </div>
    )
  })

  return (
    <div>
      {displayTeam}
    </div>
  )
}

export default TeamInfo;
