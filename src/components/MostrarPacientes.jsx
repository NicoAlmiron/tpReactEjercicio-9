import React, { Component } from "react";
import CardPaciente from "./CardPaciente";

const MostrarPacientes = ({
  listaPacientes,
  colorAvatar,
  borrarCardPaciente,
}) => {
  return (
    <article className="d-flex flex-wrap justify-content-evenly">
      {listaPacientes.map((mascota, i) => (
        <CardPaciente
          key={i}
          listaPacientes={listaPacientes}
          index={i}
          colorAvatar={colorAvatar}
          borrarCardPaciente={borrarCardPaciente}
        ></CardPaciente>
      ))}
    </article>
  );
};

export default MostrarPacientes;
