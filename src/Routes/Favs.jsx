import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const {odontologos} = useGlobalContext()
  return (
    <>
      <h1>Odontólogos favoritos</h1>
      <div className="card-grid">
        {odontologos.favs.map(odontologo => <li style={{"listStyle": "none"}} key={odontologo.id}>
            <Card 
            image="../images/doctor.jpg"
            odontologo={odontologo}
             />
             </li>)}
      </div>
    </>
  );
};

export default Favs;
