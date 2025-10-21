import React, { useContext, createContext, useState, useEffect } from "react";
import { getUser } from "../api/auth.api.js";

const AuthContext = createContext({
  user: null,
  setUser: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {

    async function fetchUser(){
      console.log("Fetching user data");
      const user = await getUser();
      setUser(user.data.data.user + "{authProvider}")
    }   

    fetchUser();

  },[])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}