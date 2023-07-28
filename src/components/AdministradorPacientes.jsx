import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import MostrarPacientes from "./MostrarPacientes";

const AdministradorPacientes = () => {
  return (
    <Container>
      <section className="border border-2 border-dark rounded-3 mx-3 shadow ">
        <article className="py-4 border-bottom border-dark">
          <h4 className="display-6 text-center text-warning">
            Administrador de pacientes
          </h4>
        </article>
        <Form className="text-white">
          <div className="bg-primary py-4">
            <FormGroup controlId="nombreMascota" className="mb-3 px-2">
              <Row>
                <Col xs={4} className="text-center">
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
                <Col xs={4} className="text-center">
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
                <Col xs={2} className="text-center">
                  <FormLabel>Fecha:</FormLabel>
                </Col>
                <Col xs={5} className="d-flex">
                  <FormControl
                    type="number"
                    placeholder="dd"
                    required
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="mm"
                    required
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="aa"
                    required
                  ></FormControl>
                </Col>
                <Col xs={2} className="text-center">
                  <FormLabel>Hora:</FormLabel>
                </Col>
                <Col xs={3} className="d-flex">
                  <FormControl
                    type="number"
                    placeholder="hh"
                    required
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="mm"
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
            <Button variant="warning" className="my-3" type="submit">
              Crear Nueva cita
            </Button>
          </div>
        </Form>
      </section>
      <MostrarPacientes></MostrarPacientes>
    </Container>
  );
};

export default AdministradorPacientes;
