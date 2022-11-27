import './PatientLog.scss';
import React, {useEffect, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientLog() {
  const [loaded, setLoaded] = useState(true);

  const {patientId} = useParams();
  const {setReloadPatientValue} = useSessionContext();

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        'Patient Log'
      )}
    </>
  );
}
