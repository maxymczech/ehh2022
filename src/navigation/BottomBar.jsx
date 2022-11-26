import './BottomBar.scss';
import {Link} from "react-router-dom";
import React from 'react';
import config from '../config';
import getAge from '../utils/get-age';
import getName from '../utils/get-name';
import i18n from '../utils/i18n';

export default function BottomBar({active, patient, patientId}) {

  const age = getAge(patient?.birthDate);
  const isOld = age >= config.oldAge;
  const name = getName(patient?.name?.[0]);

  const profileIconClass = patient ? `profile-image ${patient.gender} ${isOld ? 'old' : 'young'}` : '';

  return (
    <div className="bottom-bar">
      <div className="diabro" />
      <div className="items">
        <Link
          className={active === 'dashboard' ? 'active' : ''}
          to={`/patient/${patientId}`}
        >
          <span className={`icon ${patient ? profileIconClass : ''}`} />
          <span className="text">
            {i18n.t('bottomNavigation.dashboard')}
          </span>
        </Link>
        <Link
          className={active === 'calculator' ? 'active' : ''}
          to={`/patient/${patientId}/calculator`}
        >
          <span className="icon calculator" />
          <span className="text">
            {i18n.t('bottomNavigation.calculator')}
          </span>
        </Link>
        <Link
          className={active === 'information' ? 'active' : ''}
          to={`/patient/${patientId}/information`}
        >
          <span className="icon information" />
          <span className="text">
            {i18n.t('bottomNavigation.information')}
          </span>
        </Link>
        <Link
          className={active === 'log' ? 'active' : ''}
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
