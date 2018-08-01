import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../src/screens/Register';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';

const Index = ({ pathname }) => {
    switch(pathname) {
        case '/':
            return <Register />
        case '/login':
            return <Login />
        case '/home':
            return <Home />
        default:
            return <Register />
    }
}

let pathname = window.location.pathname;

ReactDOM.render(
    <Index pathname={pathname} />,
    document.getElementById('root')
)

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
})