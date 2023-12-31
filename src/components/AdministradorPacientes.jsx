import React, { useEffect, useState } from "react";
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
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueño, setNombreDueño] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [año, setAño] = useState("");
  const [minutos, setMinutos] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [listaPacientes, setListaPacientes] = useState(mascotas);
  const [colorAvatar, setColorAvatar] = useState("");

  const arregloFechas = [{ dia: dia, mes: mes, año: año }];
  const arregloHoras = [{ hora: hora, minutos: minutos }];

  const colorAleatorio = () => {
    const index = Math.round(Math.random() * 7);
    const colores = [
      "azul",
      "gris",
      "celeste",
      "naranja",
      "rojo",
      "negro",
      "verde",
      "blanco",
    ];
    setColorAvatar(colores[index]);
  };

  const arregloMascotas = [
    {
      nombreMascota: nombreMascota,
      nombreDueño: nombreDueño,
      fecha: arregloFechas,
      horas: arregloHoras,
      sintomas: sintomas,
      colorAvatar: colorAvatar,
    },
  ];

  useEffect(() => {
    localStorage.setItem("mascotas", JSON.stringify(listaPacientes));
  }, [listaPacientes]);

  const handleSubmit = (e) => {
    (e) => e.preventDefault(e);
    setListaPacientes([...listaPacientes, arregloMascotas[0]]);

    setDia("");
    setMes("");
    setAño("");
    setHora("");
    setMinutos("");
    setNombreMascota("");
    setNombreDueño("");
    setColorAvatar("");
    e.reset();
  };

  const borrarCardPaciente = (index) => {
    let listaPacientesFiltrada = listaPacientes.filter(
      (itemMascota, i) => index !== i
    );
    setListaPacientes(listaPacientesFiltrada);
    mascotas.splice(index, 1);
    localStorage.setItem("mascotas", JSON.stringify(listaPacientes));
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <section
        className="border border-2 border-dark rounded-3 mx-3 shadow "
        style={{ width: "35rem" }}
      >
        <article className="py-4 border-bottom border-dark">
          <h4 className="display-6 text-center text-warning">
            Administrador de pacientes
          </h4>
        </article>
        <Form className="text-white" onSubmit={handleSubmit}>
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
                    defaultValue={nombreMascota}
                    onChange={(e) => setNombreMascota(e.target.value)}
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
                    defaultValue={nombreDueño}
                    onChange={(e) => setNombreDueño(e.target.value)}
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
                    defaultValue={dia}
                    onChange={(e) => setDia(e.target.value)}
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="mm"
                    required
                    defaultValue={mes}
                    onChange={(e) => setMes(e.target.value)}
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="aa"
                    required
                    defaultValue={año}
                    onChange={(e) => setAño(e.target.value)}
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
                    defaultValue={hora}
                    onChange={(e) => setHora(e.target.value)}
                  ></FormControl>
                  <FormControl
                    type="number"
                    placeholder="mm"
                    required
                    defaultValue={minutos}
                    onChange={(e) => setMinutos(e.target.value)}
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
                defaultValue={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
              ></FormControl>
            </FormGroup>
          </div>
          <div className="text-center border-top border-dark">
            <Button
              variant="warning"
              className="my-3"
              type="submit"
              onClick={colorAleatorio}
            >
              Crear Nueva cita
            </Button>
          </div>
        </Form>
      </section>
      <MostrarPacientes
        listaPacientes={listaPacientes}
        colorAvatar={mascotas}
        borrarCardPaciente={borrarCardPaciente}
      ></MostrarPacientes>
    </Container>
  );
};

export default AdministradorPacientes;
