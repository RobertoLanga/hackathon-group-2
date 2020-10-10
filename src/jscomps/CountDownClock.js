import React, { useState, useEffect } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const CountDownClock = props => {
  const [showTag, setShowTag] = useState(true);
  const [display, setDisplay] = useState(false);

  return (
    <div className="">
      {showTag && (
        <>
          <h2 className="font-sans text-lg text-gray-800 py-4">{props.agenda.item}</h2>
          <div className="flex flex-row justify-between items-center">
            <button
              className="bg-transparent hover:bg-blue-800 text-blue-800 hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded"
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
                size={50}
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
