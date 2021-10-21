import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const BeersContext = createContext([]);

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((response) => setBeers(response.data))
      .catch((response) => console.log(response));
  }, []);

  return (
    <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
  );
};
