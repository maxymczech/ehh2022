import './PatientCalculator.scss';
import React, {useEffect, useState} from 'react';
import Loader from '../components/ui/Loader';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientCalculator() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        'Patient Calculator'
      )}
    </>
  );
}
