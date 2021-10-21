import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  const addToFormatura = (item) => {
    console.log(formatura);
    setFormatura([...formatura, item]);
  };

  const deleteToFormatura = (deleteItem) => {
    setFormatura(formatura.filter((item) => item.name !== deleteItem));
  };

  return (
    <FormaturaContext.Provider
      value={{ addToFormatura, deleteToFormatura, formatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
