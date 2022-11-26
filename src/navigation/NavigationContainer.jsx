import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LanguageModal from '../components/ui/LanguageModal';
import PatientCalculator from '../pages/PatientCalculator';
import PatientDashboard from '../pages/PatientDashboard';
import PatientDiabro from '../pages/PatientDiabro';
import PatientInformation from '../pages/PatientInformation';
import PatientList from '../pages/PatientList';
import PatientLog from '../pages/PatientLog';
import PatientPage from '../pages/PatientPage';
import React from 'react';

export default function NavigationContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PatientList />} path="/" />
        <Route element={<PatientPage />} path="/patient/:patientId">
          <Route element={<PatientCalculator />} path="calculator" />
          <Route element={<PatientDashboard />} path="dashboard" />
          <Route element={<PatientDiabro/>} path="diabro" />
          <Route element={<PatientInformation />} path="information" />
          <Route element={<PatientLog />} path="log" />
        </Route>
      </Routes>
      <LanguageModal />
    </BrowserRouter>
  );
}
