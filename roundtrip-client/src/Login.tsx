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

  const signIn = (event: React.MouseEvent<HTMLFormElement>) => {
    handleSubmitLogin(event);
  };

  return (
    <div
      style={{
        marginTop: '6rem',
        paddingTop: '5rem',
        paddingBottom: '20rem',
        backgroundColor: '#ff99cc',
      }}
    >
      <Form style={{ paddingLeft: '40%', marginTop: '2%' }} onSubmit={signIn}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="email"
            name="email"
            required={true}
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
            required={true}
            placeholder="Password"
            style={{ width: '40%' }}
          />
        </Form.Group>
        {Object.values(values).indexOf('password') > -1 && (
          <p className="error-text">{errors.password}</p>
        )}

        <Button disabled={isSubmitting} variant="primary" type="submit" style={{ width: '15%' }}>
          Login
        </Button>
      </Form>
    </div>
  );
};
