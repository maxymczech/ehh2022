import './PatientList.scss';
import React, {useEffect, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import {Link} from "react-router-dom";
import Loader from '../components/ui/Loader';
import PatientItem from '../components/ui/PatientItem';
import {useNavigate} from "react-router-dom";

export default function Main() {
  const [patients, setPatients] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const result = await FHIRRequest('/Patient');
        const json = await result.json();
        setPatients(json?.entry?.map?.(item => item?.resource) || []);
        setLoaded(true);
      } catch (e) {
        console.error(e);
      }
    })()
  }, []);

  const handleClick = patient => {
    navigate(`/patient/${patient.id}`);
  };

  return !loaded ? (
    <Loader />
  ) : (
    <div className="list-wrap">
      {patients.map(patient => (
        <PatientItem
          key={patient?.id}
          onClick={() => handleClick(patient)}
          patient={patient}
        />
      ))}
    </div>
  );
}

