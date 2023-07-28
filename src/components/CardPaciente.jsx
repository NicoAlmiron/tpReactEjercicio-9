import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const CardPaciente = () => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="m-3 border-danger border-2 shadow rounded-3"
    >
      <Card.Header className="d-flex bg-primary">
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "black",
            borderRadius: "3rem",
          }}
          className="me-2 mt-2"
        ></div>
        <div>
          <h5 className="text-white ">Mascota: Firulais</h5>
          <h6 className="text-white fw-light">Dueño: Fulano</h6>
        </div>
      </Card.Header>
      <Card.Body className="bg-info ">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Fecha:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              dd/mm/aa
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Hora:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              hh:mm
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col xs={5} className="text-center">
            <p className="fw-bold">Sintomas:</p>
          </Col>
          <Col xs={7}>
            <p className="bg-white border border-success border-2 p-2 rounded shadow">
              Descripcion de los sintomas
            </p>
          </Col>
        </Row>
        {/* <p className="fw-bold">Fecha: dd/mm/aa</p>
        <p>Hora: hh:mm</p>
        <p>Sintomas: descripsion de los sintomas</p> */}
      </Card.Body>
      <Card.Footer className="bg-primary text-end">
        <Button variant="danger">Borrar</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardPaciente;
