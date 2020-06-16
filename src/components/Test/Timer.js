import React, { useEffect, useState } from 'react';

const timer = (props) => {

    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(50);

    useEffect(() => {

        let timer = setInterval(() => {

            if (seconds == 0) {

                if (minutes == 0) {
                    //end the test and send the result
                    props.endTest();
                    clearInterval(timer);
                    props.sendResult();
                }
                else if (minutes != 0) {

                    setMinutes(() => minutes - 1);
                    setSeconds(59);
                }
            } else {

                setSeconds(() => seconds - 1);
            }

        }, 1000);
        return (() => {

            clearInterval(timer);
        })
    });

    return (<div className='timer'>
        <h3><span>Timer</span> {minutes}:{seconds}</h3>
    </div>)
}

export default timer;