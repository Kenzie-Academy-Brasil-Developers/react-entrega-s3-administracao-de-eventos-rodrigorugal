import { createContext, useState } from "react";

export const ConfraContext = createContext([]);

export const ConfraProvider = ({ children }) => {
  const [confra, setConfra] = useState([]);

  const addToConfra = (item) => {
    setConfra([...confra, item]);
  };
  const deleteToConfra = (deleteItem) => {
    setConfra(confra.filter((item) => item.name !== deleteItem));
  };

  return (
    <ConfraContext.Provider value={{ addToConfra, deleteToConfra, confra }}>
      {children}
    </ConfraContext.Provider>
  );
};
