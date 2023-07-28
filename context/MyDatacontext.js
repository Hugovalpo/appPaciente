import React, { createContext, useState } from "react";

const MyDataContext = createContext();

const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <MyDataContext.Provider value={{ data, setData }}>
      {children}
    </MyDataContext.Provider>
  );
};

export { MyDataContext, MyDataProvider };
