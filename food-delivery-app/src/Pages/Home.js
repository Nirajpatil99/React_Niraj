import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 return (
    <div>
      <h1>Welcome to Our Food Delivery System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
 );
};

export default Home;