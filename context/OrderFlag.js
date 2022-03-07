import React, { useState, createContext } from "react";

export const FlagContext = createContext();

export const FlagProvider = (props) => {
  const [flag, setFlag] = useState(false);
  return (
    <FlagContext.Provider value={[flag, setFlag]}>
      {props.children}
    </FlagContext.Provider>
  );
};
