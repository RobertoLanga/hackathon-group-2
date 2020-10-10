import React, { useState } from 'react';
import { Context } from '../context/MyProvider';
import AgendaItem from './AgendaItem';
import ShowList from './ShowList';
import styled from 'styled-components';

import RoomViewComponent from '../components/RoomViewComponent';

/*
const Form = styled.div({
  height: '30rem',
  width: '90%',
  margin: '10rem auto',
  padding: '0.5rem',
});
*/

const CreateMeeting = props => {
  const { state, changeState } = React.useContext(Context);
  const [showForm, setShowForm] = useState(true);
  const [agenda, setAgenda] = useState(false);

  const handleAddAgenda = item => {
    let newList = [...state['meetingAgenda'], item];
    changeState('meetingAgenda', newList);
  };

  const handleDeleteAgenda = text => {
    let currentAgendas = state.meetingAgenda;
    let Delindex = -1;
    currentAgendas.map((item, index) => {
      if (item.item === text) {
        Delindex = index;
      }
    });
    if (Delindex > -1) {
      let newList = [...state.meetingAgenda];
      newList.splice(Delindex, 1);
      changeState('meetingAgenda', newList);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-48">
      {showForm && (
        <div className="flex flex-row justify-evenly p-2">
          <div className="flex flex-col border border-black-4 rounded flex-grow p-6 m-2">
            <input
              placeholder="Name of meeting"
              className="border border-black-4 p-4 rounded"
              type="text"
              name="roomName"
              onChange={e => changeState('roomName', e.target.value)}
            ></input>
            <br />
            <input
              placeholder="Goal of meeting"
              className="border border-black-4 p-4 rounded"
              type="text"
              name="meetingTitle"
              onChange={e => changeState('meetingTitle', e.target.value)}
            ></input>
            <br />
            <div className="flex flex-col">
              <button
                className="bg-blue-600 p-2 rounded text-white hover:bg-blue-800"
                onClick={() => setAgenda(!agenda)}
              >
                {' '}
                Add Agenda Item
              </button>
              {agenda && (
                <>
                  <AgendaItem handleAddAgenda={handleAddAgenda} />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col border border-black-4 rounded flex-grow p-6 m-2">
            <div className="font-sans text-lg text-gray-800 self-center underline">
              Your Meeting Agenda
            </div>
            {state.meetingAgenda && (
              <ShowList list={state.meetingAgenda} handleClickIcon={handleDeleteAgenda} />
            )}
          </div>
        </div>
      )}
      <div className="flex justify-evenly mt-10">
        <button
          className="absolute top-50 right-50 py-4 px-8 text-2xl font-medium rounded text-white bg-green-600 hover:bg-green-800"
          onClick={props.handleCreateMeeting}
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default CreateMeeting;
