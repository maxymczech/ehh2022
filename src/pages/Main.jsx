import React, {useEffect} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import {Link} from "react-router-dom";

import './Main.css';
import testImage from '../assets/images/beta-smile.svg';

export default function Main() {
  useEffect(() => {
    (async () => {
      const result = await FHIRRequest('/Patient');
      const json = await result.json();
      console.log(json);
    })()
  }, []);

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

