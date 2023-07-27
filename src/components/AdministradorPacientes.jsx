import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

const AdministradorPacientes = () => {
  return (
    <section className="border border-2 border-dark rounded-3 mx-3 shadow ">
      <article className="py-4 border-bottom border-dark">
        <h4 className="display-6 text-center text-warning">
          Administrador de pacientes
        </h4>
      </article>
      <Form className="text-white">
        <div className="bg-success py-4">
          <FormGroup controlId="nombreMascota" className="mb-3 px-2">
            <Row>
              <Col xs={4}>
                <FormLabel>Nombre Mascota:</FormLabel>
              </Col>
              <Col xs={8}>
                <FormControl
                  type="text"
                  placeholder=" Ej. Firulais"
                  autoFocus
                  required
                ></FormControl>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup controlId="nombreDueño" className="mb-3 px-2">
            <Row>
              <Col xs={4}>
                <FormLabel className="fs-light">Nombre Dueño:</FormLabel>
              </Col>
              <Col xs={8}>
                <FormControl
                  type="text"
                  placeholder="Ej. Fulano"
                  required
                ></FormControl>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup controlId="fechaHora" className="mb-3 px-2">
            <Row>
              <Col xs={2}>
                <FormLabel>Fecha:</FormLabel>
              </Col>
              <Col xs={4}>
                <FormControl
                  type="number"
                  placeholder="dd/mm/aa"
                  required
                ></FormControl>
              </Col>
              <Col xs={2}>
                <FormLabel>Hora:</FormLabel>
              </Col>
              <Col xs={4}>
                <FormControl
                  type="number"
                  placeholder="hh:mm"
                  required
                ></FormControl>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup controlId="sintomas" className="d-flex px-2">
            <FormLabel className="me-2 ">Sintomas:</FormLabel>
            <FormControl
              as="textarea"
              rows={2}
              placeholder="Ingrese aqui los sintomas"
              required
            ></FormControl>
          </FormGroup>
        </div>
        <div className="text-center border-top border-dark">
          <Button className="my-3">Crear Nueva cita</Button>
        </div>
      </Form>
    </section>
  );
};

export default AdministradorPacientes;
