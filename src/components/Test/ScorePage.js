import React, { useEffect } from 'react';
import axios from 'axios';


const token = localStorage.getItem('token');

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const scorePage = (props) => {

    useEffect(() => {        
        
    });

    return (
        <div className='questions'>
            <br /><br />
            <br /><br />
            <div>
                <h2>Congratulations you have completed your test</h2>
                <h3> Final Score : {(props.score/props.total)*100 + '%'} </h3>
            </div>
            <div>
                <br /><br />
                <br /><br />
                <button className='btn' onClick={props.close} > Close </button>
            </div>
        </div >
    )
};

export default scorePage;