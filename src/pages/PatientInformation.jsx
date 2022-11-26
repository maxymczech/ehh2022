import './PatientCalculator.scss';
import React, {useEffect, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientInformation() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        'Patient Information'
      )}
    </>
  );
}
