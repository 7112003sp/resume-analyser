import React, { createContext, useState } from "react";
export const UseContext = createContext();

const Context = ({ children }) => {
  const [file, setfile] = useState(null);
  const [jd, setjd] = useState("");
  const [response, setresponse] = useState(null);
  return (
    <UseContext.Provider
      value={{ file, setfile, jd, setjd, response, setresponse }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default Context;
