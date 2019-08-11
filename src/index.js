import React from 'react';
import ReactDOM from 'react-dom';
import AppModule from './App/app';

const App = () => {
    return <AppModule/>;
};

ReactDOM.render(<App />, document.querySelector("#root"));