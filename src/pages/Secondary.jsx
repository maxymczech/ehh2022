import { Link } from "react-router-dom";
import React from 'react';

export default function Secondary() {
  return (
    <>
      <Link to="/">Main Page</Link>
      <span>Secondary Page</span>
    </>
  );
}