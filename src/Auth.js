import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState(false);
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    setloading(true);
    if (localStorage.getItem("token")) {
      setauth(true);
      setTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
      }, 300000);
    }
    setloading(false);
  }, []);

  const setLoging = () => {
    setauth(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      setauth(false);
      window.location.reload();
    }, 300000);
  };

  const setLogout = () => {
    setauth(false);
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <AuthContext.Provider
      value={{ auth: auth, setAuthFlag: () => setLoging(), setLogout }}
    >
      {loading ? <h1>loading..</h1> : children}
    </AuthContext.Provider>
  );
};
