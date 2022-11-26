import './PatientHeader.scss';
import {Link} from 'react-router-dom';
import LanguagePicker from './LanguagePicker';
import React from 'react';
import config from '../../config';
import getAge from '../../utils/get-age';
import getName from '../../utils/get-name';
import {useSessionContext} from '../../contexts/SessionContext';

export default function PatientHeader({goBack}) {
  const {currentPatient} = useSessionContext();

  const age = getAge(currentPatient.birthDate);
  const isOld = age >= config.oldAge;
  const name = getName(currentPatient?.name?.[0]);

  return (
    <div className="patient-header">
      {goBack && (
        <Link className="back" to="/" />
      )}
      <LanguagePicker />

      <div className="name">{name}</div>
      <Link
        className={`profile-image ${currentPatient?.gender} ${isOld ? 'old' : 'young'}`}
        to={`/patient/${currentPatient?.id}/dashboard`}
      />
    </div>
  );
}
