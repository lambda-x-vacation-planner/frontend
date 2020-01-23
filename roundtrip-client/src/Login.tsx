import React from 'react';
import useFormValidation from './formValidation/useFormValidation';
import validateAuth from './formValidation/validateAuth';
import { Button, Form } from 'react-bootstrap';
import { initialState } from './reducers';

export const Login = () => {
  const {
    handleSubmitLogin,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(initialState, validateAuth);

  return (
    <div id="contact">
      <Form style={{ paddingLeft: '40%', marginTop: '2%' }} onSubmit={handleSubmitLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="email"
            name="email"
            placeholder="Email"
            style={{ width: '40%' }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {Object.values(values).indexOf('email') > -1 && (
          <p className="error-text">{errors.email}</p>
        )}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type="password"
            name="password"
            placeholder="Password"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {Object.values(values).indexOf('password') > -1 && (
          <p className="error-text">{errors.password}</p>
        )}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            type="text"
            placeholder="Name"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {Object.values(values).indexOf('name') > -1 && <p className="error-text">{errors.name}</p>}
        <Button disabled={isSubmitting} variant="primary" type="submit" style={{ width: '15%' }}>
          Register
        </Button>
      </Form>
    </div>
  );
};