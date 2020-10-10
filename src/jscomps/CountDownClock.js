import React, { useState, useEffect } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const CountDownClock = props => {
  const [showTag, setShowTag] = useState(true);
  const [display, setDisplay] = useState(false);

  return (
    <div className="">
      {showTag && (
        <>
          <div>{`${props.agenda.item} ( ${props.agenda.time} mins )`}</div>
          <button
            className="bg-blue-600 p-2 rounded text-white hover:bg-blue-800"
            onClick={() => setDisplay(true)}
          >
            {' '}
            Start{' '}
          </button>
          {display && (
            <ReactCountdownClock
              seconds={props.agenda.time * 60}
              color="#000"
              alpha={0.9}
              showMilliseconds={false}
              size={50}
              onComplete={() => setShowTag(false)}
            />
          )}
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
