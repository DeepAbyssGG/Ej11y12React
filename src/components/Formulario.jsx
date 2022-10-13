import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [pais, setPais] = useState("");
  const [lenguaje, setLenguaje] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoria.trim() === "" || pais.trim() === "") {
      alert("Seleccione una categoria y un pais");
    } else {
      consultarAPI();
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_12227dd3c49d9f7e1e5bca836bce5f5b67efe&category=${categoria}&country=${pais}&language=${lenguaje}`
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
    } catch (error) {
      alert('complete los tres campos')
    }
  };

  const mostrarComponente = (<ListaNoticias noticias={noticias}></ListaNoticias>)

  return (
    <Card className="my-4">
      <Card.Header className="p-4 bgClaro">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por categoria:</Form.Label>
              </Col>
              <Col sm={12} md={8} lg={10}>
                <Form.Select
                  aria-label="categoria"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required
                >
                  <option value="business">Negocios</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="science">Ciencia</option>
                  <option value="technology">Tecnología</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por pais:</Form.Label>
              </Col>
              <Col sm={12} md={8} lg={10}>
                <Form.Select
                  aria-label="pais"
                  onChange={(e) => setPais(e.target.value)}
                  value={pais}
                  required
                >
                  <option value="ar">Argentina </option>
                  <option value="br">Brasil </option>
                  <option value="cl">Chile</option>
                  <option value="co">Colombia </option>
                  <option value="cu">Cuba </option>
                  <option value="mx">Mexico </option>
                  <option value="pe">Peru</option>
                  <option value="es">España </option>
                  <option value="ve">Venezuela</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por lenguaje:</Form.Label>
              </Col>
              <Col sm={12} md={8} lg={10}>
                <Form.Select
                  aria-label="lenguaje"
                  onChange={(e) => setLenguaje(e.target.value)}
                  value={lenguaje}
                  required
                >
                  <option value="ar">Arabico</option>
                  <option value="en">Ingles</option>
                  <option value="es">Español</option>
                  <option value="it">Italiano</option>
                  <option value="pt">Portugues</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Enviar
          </Button>
        </Form>
      </Card.Header>
      <Card.Body className="bgMasClaro">
        {mostrarComponente}
      </Card.Body>
    </Card>
  );
};

export default Formulario;