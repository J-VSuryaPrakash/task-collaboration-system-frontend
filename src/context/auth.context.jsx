import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}