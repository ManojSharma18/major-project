import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="java.jpg" />
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
        Java is a general purpose, high-level programming language first released by Sun Microsystems in 1995. It is designed to have as few implementation dependencies as possible, is free to use, and can run on all platforms. It is concurrent, class-based, and object-oriented. Simply put, Java is a computing platform where users can develop applications.
        </Card.Text>
        <Button ><a href='/Java'>Java</a></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample1;