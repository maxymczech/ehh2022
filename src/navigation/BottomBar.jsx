import './BottomBar.scss';
import {Link} from "react-router-dom";
import React from 'react';
import i18n from '../utils/i18n';

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <Link to="/">{i18n.t('bottomNavigation.dashboard')}</Link>
      <Link to="/">Secondary Page</Link>
    </div>
  );
}
