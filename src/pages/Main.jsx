import { Link } from "react-router-dom";
import React from 'react';

import './Main.css';
import testImage from '../assets/images/beta-smile.svg';

export default function Main() {
  return (
    <>
      <span>Main Page</span>
      <Link to="/secondary">Secondary Page</Link>
      <p>
        <img alt="" src={testImage} width="100" />
        <span className="css-image"></span>
      </p>
    </>
  );
}