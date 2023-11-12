// MyContext.js
import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [name, setName] = useState("John Doe");
    const [bio, setBio] = useState("Web Developer");
    const [email, setEmail] = useState("john.doe@example.com");
    const [phone, setPhone] = useState("+1 123-456-7890");

  return (
    <Context.Provider value={{name,setName,bio,email,setEmail,phone}}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
