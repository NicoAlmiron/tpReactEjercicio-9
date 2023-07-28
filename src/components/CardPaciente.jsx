import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AvatarMascota from "./AvatarMascota";

const CardPaciente = ({
  listaPacientes,
  index,
  colorAvatar,
  borrarCardPaciente,
}) => {
  return (
    <Card
      style={{ width: "16rem" }}
      className="m-3 border-danger border-2 shadow rounded-3"
    >
      <Card.Header className="d-flex bg-primary">
        <AvatarMascota
          listaPacientes={listaPacientes}
          index={index}
        ></AvatarMascota>
        <div>
          <h5 className="text-white">
            Mascota: {listaPacientes[index].nombreMascota}
          </h5>
          <h6 className="text-white fw-light">
            Dueño: {listaPacientes[index].nombreDueño}
          </h6>
        </div>
      </Card.Header>
      <Card.Body className="bg-info ">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Fecha:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              {listaPacientes[index].fecha[0].dia}/
              {listaPacientes[index].fecha[0].mes}/
              {listaPacientes[index].fecha[0].año}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Hora:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              {listaPacientes[index].horas[0].hora}:
              {listaPacientes[index].horas[0].minutos}
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Sintomas:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              {listaPacientes[index].sintomas}
            </p>
          </Col>
        </Row>
        {/* <p className="fw-bold">Fecha: dd/mm/aa</p>
        <p>Hora: hh:mm</p>
        <p>Sintomas: descripsion de los sintomas</p> */}
      </Card.Body>
      <Card.Footer className="bg-primary text-end">
        <Button variant="danger" onClick={() => borrarCardPaciente(index)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardPaciente;
