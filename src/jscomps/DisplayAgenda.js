import React , { useState, useEffect } from 'react';
import CountdownClock from './CountDownClock';
import { Context } from '../context/MyProvider';

const DisplayAgenda = () => {
    const {state,changeState} = React.useContext(Context);
    
return (
    <>
        {
        state.meetingAgenda && 
        state.meetingAgenda.map((agenda,index) => <CountdownClock  key ={index} agenda ={agenda}/>)
        }
    </>

)


}

export default DisplayAgenda;

//<CountdownClock  agenda ={props.meetingAgenda[agendaIndex]}/>
//<button onClick ={handleCoutdownComplete} >Start</button>