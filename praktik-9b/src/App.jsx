import React from "react";
import { useState } from "react";
import { MyContext } from "./context/MyContext";
import ChildA from "./components/ChildA";

function App() {
  const[user, setUser] = useState("John Doe");
  
  return (
    <MyContext.Provider value={{ user, setUser }}>
      <ChildA/>    
    </MyContext.Provider>
  )
}
export default App