import React from 'react'
import ReactDOM from "react-dom"

/* Define here the User functional component */
function User({user}) {
    return <h1>Welcome back, {user}</h1>
}
/* Define here the Today functional component */
function Today({date}) {
    return <p>Today is {date}</p>
}

/* Define here the App functional component */
function App({ user, date }) {
    return (
        <div>
            <User user={user} />
            <Today date={date} />
        </div>
    );
}
const element = <App user="Laurie" date={Date()} />;
ReactDOM.render(element,document.getElementById('root'));