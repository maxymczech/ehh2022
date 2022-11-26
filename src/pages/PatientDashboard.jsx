import './PatientCalculator.scss';
import React, {useEffect, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import i18n from '../utils/i18n';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientDashboard() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <div className="card">
            <h3 className="card-title">
              {i18n.t('dashboard.glucometerReadings.title')}
            </h3>
          </div>
        </>
      )}
    </>
  );
}
