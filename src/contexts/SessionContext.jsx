import React, {createContext, useContext, useEffect, useState} from 'react';
import locales from '../locales';

const SessionContext = createContext();

const SessionProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [currentPatient, setCurrentPatient] = useState(null);
  const [currentPatientData, setCurrentPatientData] = useState(null);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [reloadPatientValue, setReloadPatientValue] = useState(0);

  useEffect(() => {
    try {
      const locale = localStorage.getItem('currentLocale');
      if (locale in locales) {
        setCurrentLocale(locale);
      }
    } catch (e) {
      console.error(e);
    }
  }, [setCurrentLocale]);

  const sessionState = {
    currentLocale,
    currentPatient,
    currentPatientData,
    languageModalOpen,
    reloadPatientValue,
    setCurrentLocale,
    setCurrentPatient,
    setCurrentPatientData,
    setLanguageModalOpen,
    setReloadPatientValue
  };

  return (
    <SessionContext.Provider value={{...sessionState}}>
      {children}
    </SessionContext.Provider>
  );
};

const useSessionContext = () => useContext(SessionContext);

export {
  SessionContext,
  SessionProvider,
  useSessionContext
};
