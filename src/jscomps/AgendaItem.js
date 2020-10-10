import React , { useState } from 'react';
import IconTrash from './IconTrash';

const AgendaItem = props => {

    const [text, setText] = useState('');
    const [time, setTime] = useState('');

    return(
        <div className ="ui form">
            
            <label>Agenda Name</label>
            <input 
            type='text' 
            name='agenda'
            value={text}
            onChange = {e => setText(e.target.value)}
            />
            <label>Time (mins)</label>
            <input 
            type='number' 
            name='time'
            value={time}
            onChange = {e => setTime(e.target.value)}
            />
            <button onClick ={async() => 
                {   let item ={};
                    item.item = text;
                    item.time = time;
                    await props.handleAddAgenda(item);
                    setText('');
                    setTime(0)

                }
            }
            > Add </button>

        </div>
    );
}

export default AgendaItem;