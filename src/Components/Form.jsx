import React, { useState } from "react";
import UserCard from "./UserCard";
import UserError from "./UserError";


const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [showUserCard, setShowUserCard] = useState(false);
  const [showUserError, setShowUserError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombreTarget = event.target.querySelector(".nombre").value;
    const emailTarget = event.target.querySelector(".email").value;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (
      nombreTarget.trim().length < 6 || /^\s/.test(nombreTarget) || !emailRegex.test(emailTarget)
    ) {
      setShowUserError(true);
      setShowUserCard(false);
    } else {
      setShowUserError(false);
      setShowUserCard(true);
      setUsuario({ nombre: nombreTarget, email: emailTarget });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          className="nombre"
        />
        <input
          type="text"
          placeholder="Ingresá tu correo electrónico"
          className="email"
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      {showUserCard && <UserCard usuario={usuario} />}
      {showUserError && <UserError />}
    </div>
  );
};

export default Form;