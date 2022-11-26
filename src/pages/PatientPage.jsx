import './PatientDashboard.scss';
import {Outlet, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import BottomBar from '../navigation/BottomBar';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import PatientHeader from '../components/ui/PatientHeader';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientPage() {
  const [loaded, setLoaded] = useState(false);

  const {patientId} = useParams();
  const {currentPatient, setCurrentPatient} = useSessionContext();

  useEffect(() => {
    (async () => {
      try {
        const result = await FHIRRequest(`/Patient/${patientId}`);
        const data = await result.json();
        setLoaded(true);
        setCurrentPatient(data);
      } catch (e) {
        console.error(e);
      }
    })()
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          {currentPatient && (
            <PatientHeader
              goBack={true}
              patient={currentPatient}
            />
          )}

          <div className="page-padding">
            <Outlet />
          </div>
        </>
      )}
      {currentPatient && (
        <BottomBar
          patient={currentPatient}
          patientId={patientId}
        />
      )}
    </>
  );
}
