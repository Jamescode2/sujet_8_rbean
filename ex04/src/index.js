import React from 'react'
import ReactDOM from "react-dom"


function Clients(props) {
    let tab = [];
    for (let i = 0; i < props.clients.length; i++) {
        tab.push(<li>{props.clients[i]}</li>)
    }
    return (
        <ul>
            {tab}
        </ul>
    );
}

const element = <Clients clients={["Batman", "Spiderman", "IronMan"]} />;
ReactDOM.render(element, document.getElementById('root'))