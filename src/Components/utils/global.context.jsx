import { createContext, useContext, useReducer, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [favs, dispach] = useReducer(favsReducer, [])
  const [odontologos, setOdontologos] = useState([])
  
  return (
    <ContextGlobal.Provider value={{odontologos, setOdontologos}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalContext = () => {
  return useContext(ContextGlobal)
}
