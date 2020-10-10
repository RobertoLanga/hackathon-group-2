import React, {useState} from 'react';
import { Context } from '../context/MyProvider';
import AgendaItem from './AgendaItem';
import ShowList from './ShowList';
import styled from 'styled-components';

import RoomViewComponent from '../components/RoomViewComponent';

const Form = styled.div({
    height: '30rem',
    width: '20rem',
    margin: '10rem auto',
    padding: '0.5rem'
  });


const CreateMeeting = props => {

    const {state,changeState} = React.useContext(Context);
    const [define,setDefine] = useState(true);
    const [agenda,setAgenda] = useState(false);

    const handleAddAgenda = item =>{
        let newList = [...state['meetingAgenda'],item];
        changeState('meetingAgenda', newList);
    };

    const handleDeleteAgenda = text =>{

        let currentAgendas = state.meetingAgenda;
        let Delindex = -1;
        currentAgendas.map((item,index) =>{
            if(item.item === text){Delindex= index}
        })
        if(Delindex > -1) {
            let newList = [...state.meetingAgenda];
            newList.splice(Delindex,1);
            changeState('meetingAgenda', newList);
        }
    }

    return(
        <Form>
            {
                define && 
                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Room Name</label>
                    <input 
                    type='text' 
                    name='roomName'
                    onChange ={e => changeState('roomName',e.target.value)}
                    ></input>
                    
                    <label>Meeting Title</label>
                    <input 
                    type='text' 
                    name='meetingTitle'
                    onChange ={e => changeState('meetingTitle',e.target.value)}
                    ></input>
                    <br />
                    <button style = {{width: '50%'}} className ="ui primary button" onClick ={() => setAgenda(!agenda)}> + Agenda</button>
                    {
                        agenda &&
                        <>
                            <AgendaItem handleAddAgenda = {handleAddAgenda}/>
                        </>
                    }
                    <br />
                    <div>Agenda List</div>
                    {
                        state.meetingAgenda && <ShowList list ={state.meetingAgenda} handleClickIcon = {handleDeleteAgenda} />
                    }
                    <br />
                    <br />
                    <button style = {{width: '50%'}} className ="ui primary button" onClick={props.handleCreateMeeting}>Create Meeting</button>
                    <br />
                </div>

            }
        </Form>
        
    );

}

export default CreateMeeting;

