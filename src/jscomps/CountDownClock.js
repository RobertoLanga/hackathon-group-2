import React, { useState, useEffect } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const CountDownClock = props => {
  const [showTag, setShowTag] = useState(true);
  const [display, setDisplay] = useState(false);

  return (
    <div className="">
      {showTag && (
        <>
          <div className="font-sans text-lg text-gray-800 py-2">{`${props.agenda.item} ( ${props.agenda.time} mins )`}</div>
          <div className="flex flex-row justify-between items-center">
            <button
              className="bg-blue-600 p-2 rounded text-white hover:bg-blue-800"
              onClick={() => setDisplay(true)}
            >
              Start
            </button>
            {display && (
              <ReactCountdownClock
                seconds={props.agenda.time * 60}
                color="#cbd5e0"
                alpha={0.9}
                showMilliseconds={false}
                size={30}
                onComplete={() => setShowTag(false)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CountDownClock;

/*     <ReactCountdownClock seconds={props.time}
color="#000"
alpha={0.9}
size={200}
onComplete = {props.handleCoutdownComplete} 
/> 

*/
