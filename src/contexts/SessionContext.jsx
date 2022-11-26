import React, {createContext, useContext, useState} from 'react';

const SessionContext = createContext();

const SessionProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [currentPatient, setCurrentPatient] = useState(null);

  const sessionState = {
    currentLocale,
    currentPatient,
    setCurrentLocale,
    setCurrentPatient
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
