import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFormValidation from './formValidation';
import validateAuth from './formValidation';
import './register.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
};

export const Register = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth);

  return (
    <div id="contact">
      <Form style={{ paddingLeft: '40%', marginTop: '2%' }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="email"
            placeholder="Email"
            style={{ width: '40%' }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.email && <p className="error-text">{errors.email}</p>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type="password"
            placeholder="Password"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {errors.password && <p className="error-text">{errors.password}</p>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            type="text"
            placeholder="Username"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {errors.username && <p className="error-text">{errors.username}</p>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"
            placeholder="Name"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {errors.name && <p className="error-text">{errors.name}</p>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.photo}
            type="file"
            placeholder="Photo"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {errors.photo && <p className="error-text">{errors.photo}</p>}
        <Button disabled={isSubmitting} variant="primary" type="submit" style={{ width: '15%' }}>
          Register
        </Button>
      </Form>
    </div>
  );
};
