import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';

import '../styles/contact.css'


export default function Contact() {

    return (
        <section id='contactMe'>
            <Formik
                initialValues={{ email: '', name: '', message: '' }}
                validate={values => {
                    const errors = {};

                    // errors for email
                    if (!values.email) {
                        errors.email = 'Email Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    // errors for name
                    if (!values.name) {
                        errors.name = 'Name Required'
                    }

                    // errors for message
                    if (!values.message) {
                        errors.message = 'Message Required'
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    window.location.reload();
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='contactForm'>
                        
                        <label htmlFor='name'>Name</label>
                        <Field id='name' type="text" name="name" />
                        <ErrorMessage name="name" component="div" />


                        <label htmlFor='email'>Email</label>
                        <Field id='email' type="email" name="email" />
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor='message'>Message</label>
                        <Field id='message' as='textarea' name="message" />
                        <ErrorMessage name="message" component="div" />

                        <button className='submitButton' type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );

}