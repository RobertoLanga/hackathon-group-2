import React, { useEffect } from 'react';
import { Context } from '../context/MyProvider';
import styled from 'styled-components';

const Container = styled.div({
  boarder: 'solid 1px'
});

const AgendaDisplay = props => {
  const { state, changeState } = React.useContext(Context);

  const showAgendaItems = state.meetingAgenda.map((item,index) => {
    return (
      <li key ={index}>
        {item.item} {item.time}
      </li>
    );
  });

  return (
    <Container>
      <div className="agenda-list">
        <div className="agenda-title">
          <h2>Meeting: {state.meetingTitle}</h2>
          <ul>{showAgendaItems}</ul>
          <h2>Total time: {state.meetingTime}</h2>
        </div>
      </div>
    </Container>
  );
};

export default AgendaDisplay;
