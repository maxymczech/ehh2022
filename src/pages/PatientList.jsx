import './PatientList.scss';
import React, {useCallback, useEffect, useState} from 'react';
import FHIRRequest from '../api/FHIRRequest';
import {Link} from "react-router-dom";
import Loader from '../components/ui/Loader';
import PatientItem from '../components/ui/PatientItem';
import getName from '../utils/get-name';
import {useNavigate} from "react-router-dom";

export default function PatientList() {
  const [filterValue, setFilterValue] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [patients, setPatients] = useState([]);

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

  const handleClick = useCallback(patient => {
    navigate(`/patient/${patient.id}/dashboard`);
  }, [navigate]);

  const handleChange = useCallback(e => {
    setFilterValue(e.target.value);
  }, [setFilterValue]);

  const filteredPatients = patients.filter(patient => {
    const filterValueParsed = filterValue.trim();
    if (!filterValueParsed) {
      return true;
    }
    return (
      getName(patient?.name?.[0])?.toLowerCase?.()?.includes?.(filterValueParsed)
      ||
      patient?.id === filterValueParsed
    );
  });

  return !loaded ? (
    <Loader />
  ) : (
    <>
      <div className="patient-filter">
        <input
          type="text"
          value={filterValue}
          onChange={handleChange}
        />
      </div>
      <div className="list-wrap">
        {filteredPatients.map(patient => (
          <PatientItem
            key={patient?.id}
            onClick={() => handleClick(patient)}
            patient={patient}
          />
        ))}
      </div>
    </>
  );
}
