import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="c.jpg" />
      <Card.Body>
        <Card.Title>C Program</Card.Title>
        <Card.Text>
        C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software, C was developed at Bell Labs by Dennis Ritchie for the Unix Operating System in the early 1970s.C is a high-level and general-purpose programming language .

        </Card.Text>
        <Button variant="primary"><a href='/c'>C Link</a></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample2;