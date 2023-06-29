import { React, useEffect, useState } from "react";
import { useGlobalContext } from "./utils/global.context";

const Card = (props) => {
  const { odontologo, image } = props
  const { odontologos, dispatchOdontologos } = useGlobalContext()

  const addFav = () => {
    if (odontologos.favs.includes(odontologo)) {
      console.log("saque al odontolodo" + odontologo.name)
      dispatchOdontologos({ type: 'REMOVE_FAV', payload: odontologo })
    } else {
      dispatchOdontologos({ type: 'ADD_FAV', payload: odontologo })
    }
  }

  return (
    <div className="card">
      <img src={image} style={{ width: '100%' }} alt="Doc image" />
      <h4>{`${odontologo.name}`}</h4>
      <p>{`${odontologo.username}`}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">add fav</button>
    </div>
  );
};

export default Card;
