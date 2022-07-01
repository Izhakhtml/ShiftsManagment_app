import React from 'react';
import ReactLoading from 'react-loading';
import './style.css'
const Loading = ({ type, color }) => (
        <ReactLoading className='loading' type={type} color={color} height={667} width={375}/>
);
 
export default Loading;