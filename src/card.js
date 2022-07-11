import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="python.jpg" />
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
        Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.
        </Card.Text>
        <Button variant="primary"><a href ="/Python"> Python </a></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;