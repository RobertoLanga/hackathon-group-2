import React, { useState } from 'react';
import { setSourceMapRange } from 'typescript';
import RoomViewComponent from '../components/RoomViewComponent';
import CreateMeeting from '../jscomps/CreateMeeting';
import { Context } from '../context/MyProvider';

import DisplayAgenda from '../jscomps/DisplayAgenda';


export const Home = props => {
  const { state, changeState } = React.useContext(Context);
  const [openDefineM, setOpenDefineM] = useState(true);
  const [openRoomView, setOpenRoomView] = useState(false);

  const handleCreateMeeting = () =>{
    setOpenDefineM(false);
    setOpenRoomView(true);
  };

  return ( 
  <>
      {openDefineM  && <CreateMeeting handleCreateMeeting ={handleCreateMeeting}/>}
      {openRoomView && <RoomViewComponent
      roomName={state.roomName}
      configUrl={'https://api.simplewebrtc.com/config/guest/57b6ffcbb7bb9769d8d56fcb'}/>}

  </>

  );
}
