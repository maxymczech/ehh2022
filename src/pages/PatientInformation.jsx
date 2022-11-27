import './PatientInformation.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import React, {useEffect, useState} from 'react';
import Swiper, {Pagination} from 'swiper';
import Facts1 from '../assets/images/facts-1.svg';
import Facts2 from '../assets/images/facts-2.svg';
import Facts3 from '../assets/images/facts-3.svg';
import Facts4 from '../assets/images/facts-4.svg';
import Info1 from '../assets/images/info-1.png';
import Info2 from '../assets/images/info-2.png';
import Info3 from '../assets/images/info-3.png';
import Info4 from '../assets/images/info-4.png';
import Info5 from '../assets/images/info-5.png';
import Loader from '../components/ui/Loader';
import i18n from '../utils/i18n';
import {useParams} from 'react-router-dom';
import {useSessionContext} from '../contexts/SessionContext';

export default function PatientInformation() {
  const [loaded, setLoaded] = useState(true);

  const {currentPatient} = useSessionContext();
  const {patientId} = useParams();

  useEffect(() => {
    const swiper1 = new Swiper('.swiper-1', {
      modules: [Pagination],
    });
    const swiper2 = new Swiper('.swiper-2', {
      modules: [Pagination],
    });
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <div className="information-wrap">
          <h2>{i18n.t('info.title1')}</h2>
          <div className="swiper swiper-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={Facts1} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Facts2} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Facts3} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Facts4} alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <h2>{i18n.t('info.title2')}</h2>
          <div className="swiper swiper-2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={Info1} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Info2} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Info3} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Info4} alt="" />
              </div>
              <div className="swiper-slide">
                <img src={Info5} alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      )}
    </>
  );
}
