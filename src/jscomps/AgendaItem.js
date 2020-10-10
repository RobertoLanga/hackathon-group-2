import React , { useState } from 'react';
import IconTrash from './IconTrash';

const AgendaItem = props => {

    const [text, setText] = useState('');
    const [time, setTime] = useState('');

    return(
        <div className ="flex flex-col border border-black-4 p-2 rounded">

            <input
            placeholder = "Agenda Name"
            className="border border-black-4 p-2 rounded"
            type='text' 
            name='agenda'
            value={text}
            onChange = {e => setText(e.target.value)}
            />

            <input 
            placeholder = "Time (mins) "
            className="border border-black-4 p-2 rounded"
            type='number' 
            name='time'
            value={time}
            onChange = {e => setTime(e.target.value)}
            />
            <br />
            <button 
            className="p-2 rounded text-white w-16 bg-green-600 hover:bg-green-800 self-center"
            onClick ={async() => 
                {   let item ={};
                    item.item = text;
                    item.time = time;
                    await props.handleAddAgenda(item);
                    setText('');
                    setTime('')

                }
            }
            > Add </button>

        </div>
    );
}

export default AgendaItem;