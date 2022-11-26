import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import PatientDashboard from '../pages/PatientDashboard';
import PatientList from '../pages/PatientList';
import React from 'react';

export default function NavigationContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PatientList />} path="/" />
        <Route element={<PatientDashboard />} path="/patient/:patientId" />
      </Routes>
    </BrowserRouter>
  );
}
