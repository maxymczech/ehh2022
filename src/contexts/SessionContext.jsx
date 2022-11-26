import React, {createContext, useContext} from 'react';

const SessionContext = createContext();

const SessionProvider = ({children}) => {
  const sessionState = {
    currentLocale: 'en'
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
