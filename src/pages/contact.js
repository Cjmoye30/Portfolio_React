import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {

    return (
        <section id='contactMe'>
            <h1>Contact Me Section</h1>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );

}