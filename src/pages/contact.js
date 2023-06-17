import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../styles/contact.css'

export default function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <section id='contactMe'>

            <div className='sectionHeader'>
                <h2>Contact Me</h2>
                <h5>Reach out for hire, work, or general questions/feedback</h5>
            </div>

            <Row className='contactRow'>
                <Col className='contactCol' sm={10}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group  className="mb-3" controlId="contactName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Dragonfly Jones" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="dFlyDojo@gmail.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>

                </Col>
            </Row>



        </section>
    );

}