import React, {createContext, useContext, useState} from 'react';

const SessionContext = createContext();

const SessionProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = useState('en');

  const sessionState = {
    currentLocale
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
