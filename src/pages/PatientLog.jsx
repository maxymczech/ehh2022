import './PatientLog.scss';
import React, {useCallback, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import Loader from '../components/ui/Loader';
import i18n from '../utils/i18n';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

const loggableObservations = [{
  code: '2339-0',
  icon: 'glucometer',
  title: 'log.glucometer'
}, {
  code: '20565-8',
  icon: 'oxymeter',
  title: 'log.oxymeter'
}, {
  code: '85354-9',
  icon: 'pressure',
  title: 'log.pressure'
}, {
  code: '8331-1',
  icon: 'temperature',
  title: 'log.temperature'
}, {
  code: '8302-2',
  icon: 'height',
  title: 'log.height'
}, {
  code: '29463-7',
  icon: 'weight',
  title: 'log.weight'
}];

export default function PatientLog() {
  const [loaded, setLoaded] = useState(true);
  const [logCode, setLogCode] = useState(null);
  const [logValue, setLogValue] = useState('');

  const {patientId} = useParams();
  const {setReloadPatientValue} = useSessionContext();

  const handleChange = useCallback(e => {
    setLogValue(e.target.value);
  }, [setLogValue]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (!logValue) {
      return;
    }

    setLogCode(none);
    setLogValue('');
  }, []);

  const stopPropagation = useCallback(e => {
    e.stopPropagation();
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <div className="patient-log-cards">
          {loggableObservations.map(({code, icon, title}) => (
            <div
              className="card"
              key={code}
              onClick={() => setLogCode(code)}
              role="button"
            >
              <div className={`measurement-icon measurement ${icon}`}></div>
              <h3>{i18n.t(title)}</h3>
            </div>
          ))}
        </div>
      )}
      {logCode && (
        <div
          className="modal log-modal"
          onClick={() => setLogCode(null)}
        >
          <form onSubmit={handleSubmit} onClick={stopPropagation}>
            <input
              onChange={handleChange}
              placeholder={i18n.t('log.placeholder')}
              type="text"
              value={logValue}
            />
            <button type="submit">
              {i18n.t('log.btnSubmit')}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
