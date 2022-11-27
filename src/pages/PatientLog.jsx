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
  title: 'log.glucometer',
  unit: 'mg/dL'
}, {
  code: '20565-8',
  icon: 'oxymeter',
  title: 'log.oxymeter',
  unit: '%'
}, {
  code: '85354-9',
  icon: 'tonometer',
  title: 'log.pressure',
  unit: 'mmHg'
}, {
  code: '8331-1',
  icon: 'thermometer',
  title: 'log.temperature',
  unit: 'C'
}, {
  code: '8302-2',
  icon: 'height',
  title: 'log.height',
  unit: 'm'
}, {
  code: '29463-7',
  icon: 'weight',
  title: 'log.weight',
  unit: 'kg'
}];

export default function PatientLog() {
  const [loaded, setLoaded] = useState(true);
  const [logCode, setLogCode] = useState(null);
  const [logValue, setLogValue] = useState('');

  const {patientId} = useParams();
  const {setReloadPatientValue} = useSessionContext();

  const observation = loggableObservations.find(x => x.code === logCode);
  const unit = observation?.unit;
  const logTitle = i18n.t(observation?.title || '');

  const handleChange = useCallback(e => {
    setLogValue(e.target.value);
  }, [setLogValue]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (!logValue) {
      return;
    }

    (async () => {
      const payload = {
        "resourceType": "Observation",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": logCode,
              "display": logTitle
            }
          ],
          "text": logTitle
        },
        "subject": {
          "reference": `Patient/${patientId}`
        },
        "issued": (new Date()).toISOString(),
        "valueQuantity": {
          "value": Number(logValue),
          "system": "http://unitsofmeasure.org",
          "unit": unit
        }
      };

      try {
        await FHIRRequest('/Observation', {
          body: JSON.stringify(payload),
          method: 'POST'
        });
        setReloadPatientValue(x => x + 1);
      } catch (e) {
        console.error(e);
      }

      setLogCode(null);
      setLogValue('');
    })();
  }, [logValue, setLogCode, setLogValue]);

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
          <div onClick={stopPropagation}>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                placeholder={`${i18n.t('log.placeholder')}, ${unit}`}
                type="text"
                value={logValue}
              />
              <button type="submit">
                {i18n.t('log.btnSubmit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
