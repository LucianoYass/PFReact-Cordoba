import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './cartwidget';

function navbarReact() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container display="flex">
          <Navbar.Brand href="#home">TodoMangas</Navbar.Brand>
          <Nav className="mx-auto px-5">
            <Nav.Link className="px-5" href="#home">Inicio</Nav.Link>
            <Nav.Link className="px-5" href="#features">Manga</Nav.Link>
            <Nav.Link className="px-5" href="#pricing">Comics</Nav.Link>
            <Nav.Link className="px-5" href="#contact">Contacto</Nav.Link>
            <Nav.Link className="px-5" href="#cartwidget"><Cartwidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbarReact;