import React from "react";
import { useGlobalContext } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { odontologo, image } = props
  const { odontologos, dispatchOdontologos } = useGlobalContext()

  const addFav = () => {
    if (isFav()) {
      console.log("saque al odontolodo" + odontologo.name)
      dispatchOdontologos({ type: 'REMOVE_FAV', payload: odontologo })
    } else {
      dispatchOdontologos({ type: 'ADD_FAV', payload: odontologo })
    }
  }

  const isFav = () => {
    const cpListFavs = odontologos.favs.map(favElement => JSON.stringify(favElement))
    const isFav = cpListFavs.includes(JSON.stringify(odontologo))
    console.log(isFav)
    return isFav
  }

  return (
    <div className='card'>
      <img src={image} style={{ width: '100%' }} alt="Doc image" />
      <Link to={'/dentist/' + odontologo.id}><h4>{`${odontologo.name}`}</h4></Link>
      <p>{`${odontologo.username}`}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guard en el localStorage */}
      <button onClick={addFav} className={isFav()?"removeButton":"favButton"}>{isFav() ? "Remover favorito":"Agregar favorito"}</button>
    </div>
  );
};

export default Card;
