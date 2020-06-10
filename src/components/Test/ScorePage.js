import React from 'react';

const scorePage = (props) => (
    <div className='questions'>
        <br/><br/>
        <br/><br/>
        <div>
            <h2>Congratulations you have completed your test</h2>
<h3>Final Score : {props.score}/{props.total}</h3>
        </div>
        <div>
            <br/><br/>
            <br/><br/>
        <button className='btn' onClick={props.close} > Close </button>
        </div>
  
    </div >
);

export default scorePage;