import './BottomBar.scss';
import {Link, useLocation} from "react-router-dom";
import React from 'react';
import config from '../config';
import getAge from '../utils/get-age';
import getName from '../utils/get-name';
import i18n from '../utils/i18n';
import {useSessionContext} from '../contexts/SessionContext';

export default function BottomBar() {
  const {currentPatient} = useSessionContext();
  const location = useLocation();

  const isActive = routeName => location.pathname.endsWith(`/${routeName}`);
  const patientId = currentPatient?.id;

  const age = getAge(currentPatient?.birthDate);
  const isOld = age >= config.oldAge;
  const name = getName(currentPatient?.name?.[0]);

  const profileIconClass = currentPatient ? `profile-image ${currentPatient?.gender} ${isOld ? 'old' : 'young'}` : '';

  return (
    <div className="bottom-bar">
      <Link
        className="diabro"
        to={`/patient/${patientId}/diabro`}
      />
      <div className="items">
        <Link
          className={isActive('dashboard') ? 'active' : ''}
          to={`/patient/${patientId}/dashboard`}
        >
          <span className={`icon ${currentPatient ? profileIconClass : ''}`} />
          <span className="text">
            {i18n.t('bottomNavigation.dashboard')}
          </span>
        </Link>
        <Link
          className={isActive('calculator') ? 'active' : ''}
          to={`/patient/${patientId}/calculator`}
        >
          <span className="icon calculator" />
          <span className="text">
            {i18n.t('bottomNavigation.calculator')}
          </span>
        </Link>
        <Link
          className={isActive('information') ? 'active' : ''}
          to={`/patient/${patientId}/information`}
        >
          <span className="icon information" />
          <span className="text">
            {i18n.t('bottomNavigation.information')}
          </span>
        </Link>
        <Link
          className={isActive('log') ? 'active' : ''}
          to={`/patient/${patientId}/log`}
        >
          <span className="icon log" />
          <span className="text">
            {i18n.t('bottomNavigation.log')}
          </span>
        </Link>
      </div>
    </div>
  );
}
