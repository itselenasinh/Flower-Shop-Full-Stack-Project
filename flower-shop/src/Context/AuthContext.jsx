import React, { createContext, useState, useEffect } from "react";

export const AuthUserContext = createContext(null);

function AuthContext({ children }) {
  
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    const savedLog = localStorage.getItem("isLogged");
    console.log(savedLog)
    if (savedLog) {
      setIsLogged(JSON.parse(savedLog));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    
    <AuthUserContext.Provider value={[isLogged, setIsLogged]}>
      {children}
    </AuthUserContext.Provider>
  
  );
}

export default AuthContext;