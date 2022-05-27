import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const accSource = "./src/data/db.json";

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      setData((await axios.get(accSource)).data);
    })();
  }, []);

  console.log(data);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        data,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
