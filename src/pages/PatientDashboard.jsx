import './PatientDashboard.scss';
import React, {useEffect, useState} from 'react';
import BottomBar from '../navigation/BottomBar';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function Main() {
  const [loaded, setLoaded] = useState(false);
  const [patient, setPatient] = useState(null);

  const {patientId} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const result = await FHIRRequest(`/Patient/${patientId}`);
        const data = await result.json();
        setLoaded(true);
        setPatient(data);
      } catch (e) {
        console.error(e);
      }
    })()
  }, []);

  return !loaded ? (
    <Loader />
  ) : (
    <>
      <div className="dashboard">
        Patient Dashboard
      </div>
      <BottomBar active="dashboard" />
    </>
  );
}

