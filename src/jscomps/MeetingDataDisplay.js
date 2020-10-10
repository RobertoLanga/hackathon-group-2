import React from 'react';
import { Context } from '../context/MyProvider';

const MeetingDataDisplay = () => {
  const { state, changeState } = React.useContext(Context);

  let totalTime = 0;

  state.meetingAgenda.map(agenda => (totalTime = totalTime + parseInt(agenda.time)));

  console.log(totalTime);

  return (
    <div className="border border-black">
      <h1 className="">{`Room Name: ${state.roomName}`}</h1>
      <h1 className="">{`Meeting Title: ${state.meetingTitle}`}</h1>
      <h1 className="">{`Total Time (mins): ${totalTime}`}</h1>
    </div>
  );
};

export default MeetingDataDisplay;
