import { createContext, useContext, useEffect, useReducer } from "react";
import { odontologosReducer } from "./odontologosReducer";
import axios from "axios";

export const GlobalContext = createContext();

export const Context = ({ children }) => {

  const initialState = {
    listaOdontologos: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: ''
  }

  const [odontologos, dispatchOdontologos] = useReducer(odontologosReducer, initialState)

  const dentistsURL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(dentistsURL).then((res) => dispatchOdontologos({type:'POPULATE_LIST', payload: res.data}))
    }, [])

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(odontologos.favs))
  }, [odontologos])
  
  return (
    <GlobalContext.Provider value={{odontologos, dispatchOdontologos}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
