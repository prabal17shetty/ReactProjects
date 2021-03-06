// write code for Welcome component here
import React from 'react';
// import App from './App';

const Welcome = (props) => {
    return (
        <div>
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to Newton School. How are you? How are you doing?</h2>
        </div>
    );
};

export default Welcome;