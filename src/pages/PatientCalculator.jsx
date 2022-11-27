import './PatientCalculator.scss';
import React, {useEffect, useState} from 'react';
import Loader from '../components/ui/Loader';
import TmpCalculator from '../assets/images/tmp-calculator.png';
import i18n from '../utils/i18n';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

const foods = [{
  index1: 30,
  index2: 8,
  index3: 2.4,
  name: 'apple',
  status: 'ok'
}, {
  index1: 10,
  index2: 5.1,
  index3: 0.5,
  name: 'eggplant',
  status: 'ok'
}, {
  index1: 40,
  index2: 3,
  index3: 6.5,
  name: 'borsch',
  status: 'concerning'
}, {
  index1: 70,
  index2: 21.7,
  index3: 31.3,
  name: 'croiassant-ham-cheese',
  status: 'danger'
}, {
  index1: 0,
  index2: 0,
  index3: 1,
  name: 'chicken',
  status: 'ok'
}, {
  index1: 0,
  index2: 0,
  index3: 1,
  name: 'fish-baked',
  status: 'ok'
}];

export default function PatientCalculator() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <div className="calculator-page">
          <h2>{i18n.t('calculator.title')}</h2>
          <img alt="" className="img-responsive" src={TmpCalculator} />

          <h2>{i18n.t('calculator.foodsTitle')}</h2>
          <div className="calculator-cards">
            {foods.map(food => (
              <div className={`card ${food.status}`} key={food.name}>
                <div className={`food-icon ${food.name}`}></div>
                <h3>{i18n.t(`calculator.foods.${food.name}`)}</h3>
                <div className="food-indices">
                  {`${i18n.t(`calculator.index1`)}: `} <strong>{food.index1.toFixed(1)}</strong>
                  <br />
                  {`${i18n.t(`calculator.index2`)}: `} <strong>{food.index2.toFixed(1)}</strong>
                  <br />
                  {`${i18n.t(`calculator.index3`)}: `} <strong>{food.index3.toFixed(1)}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
