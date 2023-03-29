import React from 'react';
import './Styles/Navigation.css';

const Navigation = () => (
  <div>
    <nav className="navigation">

      <a className="maths" href="/"> Maths Magicians</a>
      <ul className="linkholder">
        <a className="home" href="/"> Home</a>
        <a className="calculator" href="calculator"> Calculator</a>
        <a className="quote" href="addquote"> Quote</a>

      </ul>

    </nav>

  </div>
);

export default Navigation;
