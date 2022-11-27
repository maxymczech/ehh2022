import './PatientDiabro.scss';
import React, {useEffect, useState} from 'react';
import DiabroItem from '../components/ui/DiabroItem';
import Loader from '../components/ui/Loader';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientDiabro() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient, currentPatientData} = useSessionContext();
  const {patientId} = useParams();

  const displayableData = (currentPatientData?.entry || []).filter(item => {
    return [
      'Condition',
      'Claim',
      'Encounter',
      'Goal',
      'Immunization',
      'MedicationRequest',
      'Observation',
      'Procedure',
      'DiagnosticReport'
    ].includes(item?.resource?.resourceType);
  }).map(item => {
    const date = (() => {
      switch(item?.resource?.resourceType) {
        case 'Condition':
          return item?.resource?.recordedDate;
        break;
        case 'Claim':
          return item?.resource?.created;
        break;
        case 'Encounter':
          return item?.resource?.period?.start;
        break;
        case 'Goal':
          return item?.resource?.target?.[0]?.dueDate;
        break;
        case 'Immunization':
          return item?.resource?.occurrenceDateTime;
        break;
        case 'MedicationRequest':
          return item?.resource?.authoredOn;
        break;
        case 'Observation':
          return item?.resource?.issued;
        break;
        case 'Procedure':
          return item?.resource?.performedPeriod?.start;
        break;
        case 'DiagnosticReport':
          return item?.resource?.issued;
        break;
        default:
        break;
      }
    })();
    return {
      date: new Date(date),
      item
    };
  }).sort((a, b) => b.date - a.date);

  const groupedByDate = {};
  displayableData.forEach(({date, item}) => {
    const k = date.toISOString().split('T')[0];
    if (!(k in groupedByDate)) {
      groupedByDate[k] = [];
    }
    groupedByDate[k].push({date, item});
  });

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        Object.entries(groupedByDate).map(([key, values]) => (
          <div className="card-group" key={`${key}-group`}>
            <div className="card-group-title">
              <span>{key}</span>
            </div>
            {values.map(({date, item}) => (
              <DiabroItem
                date={date}
                item={item}
                key={`${item?.resource?.resourceType}-${item?.resource?.id}`}
              />
            ))}
          </div>
        ))
      )}
    </>
  );
}
