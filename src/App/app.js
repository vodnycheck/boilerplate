import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './app.css';
import { getRandomDog } from './Api/api';

export default function App() {
    const [url, setUrl] = useState('');
    const [spinner, setSpinner] = useState(false);


    function btnGetNewHandle() {
        setSpinner(true);
        getRandomDog().then((response) => {setUrl(response.message)})
    }

    function handleImageLoaded() {
        setSpinner(false);
    }

    return (
        <div className='layout'>
            <img src={url}
                 onLoad={handleImageLoaded.bind(this)}
            />
            <button onClick={btnGetNewHandle}>Get new</button>
            <Loader visible={spinner} type='Bars'/>
        </div>
        )
}