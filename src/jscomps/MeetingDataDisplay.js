import React from 'react';
import { Context } from '../context/MyProvider';

const MeetingDataDisplay = () =>{
    const { state, changeState } = React.useContext(Context);

    return(
        <div style={{width: '50%'}}>
            <h1>{`Room Name: ${state.roomName}`}</h1>
            <h1>{`Meeting Title: ${state.meetingTitle}`}</h1>
        </div>
    );
};

export default MeetingDataDisplay;