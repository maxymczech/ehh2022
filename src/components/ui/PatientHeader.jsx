import './PatientHeader.scss';
import {Link} from 'react-router-dom';
import React from 'react';
import config from '../../config';
import getAge from '../../utils/get-age';
import getName from '../../utils/get-name';

export default function PatientHeader({goBack, patient}) {
  const age = getAge(patient.birthDate);
  const isOld = age >= config.oldAge;
  const name = getName(patient?.name?.[0]);

  return (
    <div className="patient-header">
      {goBack && (
        <Link className="back" to="/" />
      )}
      <div className="name">{name}</div>
      <div className={`profile-image ${patient.gender} ${isOld ? 'old' : 'young'}`} />
    </div>
  );
}