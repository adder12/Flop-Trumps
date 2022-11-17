import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Navbar(){
return (
  
    <nav id="navdiv">
        <ul>
            <li>
                <Link to="/GamePage">The Game</Link>
            </li>
            <li>
                <Link to="/HowTo">How to Play</Link>
            </li>
            <li>
                <Link to="/AddFilm">Add Film</Link>
            </li>
        </ul>
    </nav>
)

}

export default Navbar