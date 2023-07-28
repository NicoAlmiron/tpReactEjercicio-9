import React, { Component } from "react";
import CardPaciente from "./CardPaciente";

export class MostrarPacientes extends Component {
  render() {
    return (
      <article className="d-flex flex-wrap justify-content-between">
        <CardPaciente></CardPaciente>
        {/* <CardPaciente></CardPaciente>
        <CardPaciente></CardPaciente>
        <CardPaciente></CardPaciente> */}
      </article>
    );
  }
}

export default MostrarPacientes;
