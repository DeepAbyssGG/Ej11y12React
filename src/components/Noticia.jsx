import { Col, Card, Button, Badge } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  return (
    <Col sm={12} md={6} lg={3} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={noticia.image_url}
          alt="Lo siento, esta noticia no tiene imagen"
        />
        <Card.Body>
          <Card.Title className="mb-3">{noticia.title}</Card.Title>
          <Card.Subtitle className="mb-3"><Badge bg="secondary">Categoria </Badge>: {noticia.category}</Card.Subtitle>
          <Card.Subtitle className="mb-4">
            <Badge bg="secondary">Pais </Badge>: {noticia.country }
          </Card.Subtitle>
          <Card.Text>{noticia.description || noticia.content}</Card.Text>
          <Card.Subtitle className="mb-2">{noticia.creator}</Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-center">
          <a href={noticia.link}>
            <Button variant="primary">Ver noticia completa</Button>
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;