import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleVeterinaria from "./components/TitleVeterinaria";
import AdministradorPacientes from "./components/AdministradorPacientes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <TitleVeterinaria></TitleVeterinaria>
      <AdministradorPacientes></AdministradorPacientes>
    </Container>
  );
}

export default App;
