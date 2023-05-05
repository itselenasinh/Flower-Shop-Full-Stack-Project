import React, { createContext, useState } from "react";

export const AuthUserContext = createContext(null);

function AuthContext({ children }) {
  
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    
    <AuthUserContext.Provider value={[isLogged, setIsLogged]}>
      {children}
    </AuthUserContext.Provider>
  
  );
}

export default AuthContext;