import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { favsReducer } from "./favsReducer";
import axios from "axios";

export const initialState = {theme: "", data: []}

export const GlobalContext = createContext();

export const Context = ({ children }) => {

  const [favs, dispatchFavs] = useReducer(favsReducer, [])
  const [odontologos, setOdontologos] = useState([])

  const dentistsURL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(dentistsURL).then((res) => setOdontologos(res.data))
  }, [])
  
  return (
    <GlobalContext.Provider value={{odontologos}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
