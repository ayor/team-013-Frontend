import React from 'react';
import ApiContext from '../Context/ApiContext';

const counter = (props) => (

    <ApiContext.Consumer>
    {(context)=>(<div className='get_ready'>
        <h3>{context.loadingMessage}</h3>

        <div className='loader'>Loading...</div>
        <br/>
        <br/>
        <br/>{
          context.showCloseButton ? 
        <button 
        className='btn' 
        onClick={props.click}
        style={{
          backgroundColor: '#ffd700',
          padding: '10px',
          borderRadius: '20px',
          width: '75%',
          margin: '0 15%'
        }} > Close </button>
      : 
      null}
    </div>)}
    </ApiContext.Consumer>);


export default counter;
