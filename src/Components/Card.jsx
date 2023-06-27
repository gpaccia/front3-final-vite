import React from "react";

const Card = (props) => {
  const {image, name, username} = props
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src={image} style={{ width: '100%'}} alt="Doc image" />
        <h4>{`${name}`}</h4>
        <p>{`${username}`}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
