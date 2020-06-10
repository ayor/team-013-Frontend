import React from 'react';

const counter = (props) => (<div className='get_ready'>
    <h3>Get Ready In</h3>
    <div className='counter'>
        <p>{props.counter}</p>
    </div>
</div>);

export default counter;