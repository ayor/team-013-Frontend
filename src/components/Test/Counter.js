import React from 'react';
import ApiContext from '../Context/ApiContext';

const counter = (props) => (
    <ApiContext.Consumer>
    {(context)=>(<div className='get_ready'>
        <h3>{context.loadingMessage}</h3>

        <div className='loader'>Loading...</div>
    </div>)}
    </ApiContext.Consumer>);

export default counter;
