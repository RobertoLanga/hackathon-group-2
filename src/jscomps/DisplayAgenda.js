import React, { useState, useEffect } from 'react';
import CountdownClock from './CountDownClock';
import { Context } from '../context/MyProvider';

const DisplayAgenda = () => {
  const { state, changeState } = React.useContext(Context);

  return (
    <div className="my-4 mx-4">
      {state.meetingAgenda &&
        state.meetingAgenda.map((agenda, index) => <CountdownClock key={index} agenda={agenda} />)}
    </div>
  );
};

export default DisplayAgenda;

//<CountdownClock  agenda ={props.meetingAgenda[agendaIndex]}/>
//<button onClick ={handleCoutdownComplete} >Start</button>
