import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface ProductosProps {
   nombre: string;
   descripcion: string;
   precio: number;
   sku: string;
   cantidad_disponible: number;
   url: string;
 }


const Productos: React.FC<ProductosProps> = ({ nombre, descripcion, precio, sku, cantidad_disponible, url }) => {

   return (
      <>
         <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
               <Card.Title>{nombre}</Card.Title>
               <Card.Text>
                  {descripcion}
               </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
               <ListGroup.Item>$ {precio}</ListGroup.Item>
               <ListGroup.Item>SKU: {sku}</ListGroup.Item>
               <ListGroup.Item>STOCK: {cantidad_disponible}</ListGroup.Item>
            </ListGroup>

         </Card>
      </>
   )
}

export default Productos;