import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [isEmailGiven, setIsEmailGiven] = useState(false);
  const [error, setError] = useState(false);
  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        isEmailGiven,
        setIsEmailGiven,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
