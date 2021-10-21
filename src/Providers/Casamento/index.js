import { createContext, useState } from "react";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  const addToCasamento = (item) => {
    setCasamento([...casamento, item]);
  };

  const deleteToCasamento = (deleteItem) => {
    setCasamento(casamento.filter((item) => item.name !== deleteItem));
  };

  return (
    <CasamentoContext.Provider
      value={{ addToCasamento, deleteToCasamento, casamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
