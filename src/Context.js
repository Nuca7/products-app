import React, { useContext, useState } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(MyContext);
}

export { ContextProvider, useGlobalContext };
