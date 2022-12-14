import './PatientDashboard.scss';
import React, {useEffect, useState} from 'react';
import Loader from '../components/ui/Loader';
import TmpGraph from '../assets/images/tmp-graph.png';
import i18n from '../utils/i18n';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientDashboard() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  const hasContactDetails = currentPatient?.address?.length || currentPatient?.telecom?.length;

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
            <img alt="" className="img-responsive" src={TmpGraph} />
          </div>

          {hasContactDetails && (
            <div className="card">
              <h3 className="card-title">
                {i18n.t('dashboard.contactDetails.title')}
              </h3>
              {currentPatient?.telecom?.map?.((contact, i) => (
                <p className="contact-phone" key={i}>
                  {contact?.value}
                </p>
              ))}
              {currentPatient?.address?.map?.((address, i) => (
                <p className="contact-address" key={i}>
                  {[
                    address?.postalCode,
                    address?.line?.join?.(', '),
                    address?.city,
                    address?.state,
                    address?.country
                  ].filter(Boolean).join(', ')}
                </p>
              ))}
            </div>
          )}

          <h2>{i18n.t('dashboard.doctorsTitle')}</h2>
          <div className="doctor-cards">
            <div className="card">
              <div className="measurement-icon procedure"></div>
            </div>
            <div className="card">
              <div className="measurement-icon encounter"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
