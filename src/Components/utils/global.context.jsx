import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { favsReducer } from "./favsReducer";
import axios from "axios";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const Context = ({ children }) => {

  const [favs, dispatchFavs] = useReducer(favsReducer, [])
  const [odontologos, setOdontologos] = useState([])

  const dentistURL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(dentistURL).then((res) => setOdontologos(res.data))
  }, [])
  
  return (
    <ContextGlobal.Provider value={{odontologos}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context

export const useGlobalContext = () => {
  return useContext(ContextGlobal)
}
