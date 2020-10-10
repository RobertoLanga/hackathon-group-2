import React from 'react';
import { Context } from '../context/MyProvider';

const MeetingDataDisplay = () => {
  const { state, changeState } = React.useContext(Context);

  let totalTime = 0;

  state.meetingAgenda.map(agenda => (totalTime = totalTime + parseInt(agenda.time)));

  console.log(totalTime);

  return (
    <div className="my-6 mx-4">
      <h1 className="font-sans font-bold text-lg text-gray-800 my-2">{`Room Name: ${state.roomName}`}</h1>
      <h1 className="font-sans font-bold text-lg text-gray-800 my-2">{`Meeting Title: ${state.meetingTitle}`}</h1>
      <h1 className="font-sans font-bold text-lg text-gray-800 my-2">{`Meeting Time: ${totalTime}`}</h1>
    </div>
  );
};

export default MeetingDataDisplay;
