import React from 'react'
import ReactDOM from "react-dom"

var DATE = new Date();

ReactDOM.render(
    <p>Today is {`${DATE}`}</p>,
    document.getElementById('root')
);