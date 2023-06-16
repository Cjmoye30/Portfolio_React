import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/contact.css'

export default function Contact() {

    return (
        <section id='contactMe'>

            <div className='sectionHeader'>
                <h2>Contact Me</h2>
                <h5>Reach out for hire, work, or general questions/feedback</h5>
            </div>

            <Row className='contactRow'>
                <Col className='contactCol' sm={10}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Dragonfly Jones" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="dFlyDojo@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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