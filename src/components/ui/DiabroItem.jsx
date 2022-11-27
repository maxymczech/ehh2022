import './DiabroItem.scss';
import React from 'react';
import config from '../../config';
import getAge from '../../utils/get-age';
import getName from '../../utils/get-name';
import getTime from '../../utils/get-time';
import i18n from '../../utils/i18n';

export default function DiabroItem({date, item}) {
  switch(item?.resource?.resourceType) {
    case 'Claim':
      return (
        <div className="card diabro-item">
          <div className="icon insurance-claim"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.insuranceClaim.title')}</h3>
            <p>{item?.resource?.provider?.display}</p>
            <p>
              {item?.resource?.item?.map?.((item, i) => (
                <span className="d-block" key={i}>{`- ${item?.productOrService?.text}`}</span>
              ))}
            </p>
            <p>
              {`${i18n.t('diabro.insuranceClaim.amount')}: `}
              <strong>{`${item?.resource?.total?.value} ${item?.resource?.total?.currency}`}</strong>
            </p>
          </div>
        </div>
      );
    break;

    case 'Condition':
      return (
        <div className="card diabro-item">
          <div className="icon condition"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.condition')}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.code?.text}</p>
          </div>
        </div>
      );
    break;

    case 'DiagnosticReport':
      return (
        <div className="card diabro-item">
          <div className="icon report"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.diagnosticReport')}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.code?.text}</p>
          </div>
        </div>
      );
    break;

    case 'Encounter':
      return (
        <div className="card diabro-item">
          <div className="icon encounter"></div>
          <div className="rest">
            <h3>{item?.resource?.serviceProvider?.display}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.participant?.[0]?.individual?.display}</p>
          </div>
        </div>
      );
    break;

    case 'Goal':
      return (
        <div className="card diabro-item">
          <div className="icon goal"></div>
          <div className="rest">
            <h3>{item?.resource?.target?.[0]?.measure?.text}</h3>
          </div>
        </div>
      );
    break;

    case 'Immunization':
      return (
        <div className="card diabro-item">
          <div className="icon immunization"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.immunization')}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.vaccineCode?.text}</p>
          </div>
        </div>
      );
    break;

    case 'MedicationRequest':
      return (
        <div className="card diabro-item">
          <div className="icon medication"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.medicationRequest')}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.medicationCodeableConcept?.text}</p>
          </div>
        </div>
      );
    break;

    case 'Observation':
      // console.log(item?.resource?.code?.coding?.[0]?.code, item?.resource?.code?.coding?.[0]?.display);
      const iconClass = (() => {
        switch (item?.resource?.code?.coding?.[0]?.code) {
          case '38483-4':
          case '49765-1':
          case '2947-0':
          case '6298-4':
          case '4548-4':
          case '718-7':
          case '6690-2':
          case '789-8':
          case '4544-3':
            return 'blood';
          break;

          case '2339-0': // Glucose
            return 'glucometer';
          break;

          case '20565-8': // Carbon Dioxide
            return 'oxymeter';
          break;

          case '8331-1': // Oral Temperature
            return 'thermometer';
          break;

          case '85354-9': // Blood Pressure
            return 'tonometer';
          break;

          case '6299-2': // Urea Nitrogen
            return 'urine';
          break;

          case '59576-9': // Body Mass Index percentile per age and gender
          case '39156-5': // Body Mass Index
          case '29463-7': // Body Weight
            return 'weight';
          break;

          case '8302-2': // Body Height
          default:
            return '';
          break;
        }
      })();

      const valueString = item?.resource?.valueQuantity
        ? `${item?.resource?.valueQuantity?.value} ${item?.resource?.valueQuantity?.unit}`
        : item?.resource?.valueCodeableConcept
          ? item?.resource?.valueCodeableConcept?.text
          : '';

      return (
        <div className="card diabro-item">
          <div className={`icon measurement ${iconClass}`}></div>
          <div className="rest">
            <h3>{item?.resource?.code?.text}</h3>
            <p className="time">{getTime(date)}</p>
            <p><strong>{valueString}</strong></p>
          </div>
        </div>
      );
    break;

    case 'Procedure':
      return (
        <div className="card diabro-item">
          <div className="icon procedure"></div>
          <div className="rest">
            <h3>{i18n.t('diabro.procedure')}</h3>
            <p className="time">{getTime(date)}</p>
            <p>{item?.resource?.code?.text}</p>
          </div>
        </div>
      );
    break;

    default:
    break;
  }

  return null;
}
