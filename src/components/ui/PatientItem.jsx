import './PatientItem.scss';
import React from 'react';
import config from '../../config';
import getAge from '../../utils/get-age';
import getName from '../../utils/get-name';
import i18n from '../../utils/i18n';

export default function PatientItem(props) {
  const {patient} = props || {};

  const age = getAge(patient.birthDate);
  const isOld = age >= config.oldAge;
  const name = getName(patient?.name?.[0]);

  return (
    <div {...props} className="card patient-item">
      <div
        className={`photo ${patient.gender} ${isOld ? 'old' : 'young'}`}
      />
      <div className="rest">
        <h3>{name}</h3>
        <p>{`${i18n.t('patient.age')}: ${age}`}</p>
      </div>
    </div>
  );
}
