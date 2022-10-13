import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    return (
        <Row>
            {noticias.map((noticia, posicion)=>(<Noticia key={posicion} noticia={noticia}></Noticia>))}
        </Row>
    );
};

export default ListaNoticias;