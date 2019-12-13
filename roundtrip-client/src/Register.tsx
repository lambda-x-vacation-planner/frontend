import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const Register = () => {
  return (
    <div id="contact">
      <Form style={{ paddingLeft: '40%', marginTop: '2%' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" style={{ width: '40%' }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ width: '40%' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" style={{ width: '40%' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" style={{ width: '40%' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" placeholder="Photo" style={{ width: '40%' }} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: '15%' }}>
          Register
        </Button>
      </Form>
    </div>
  );
};
