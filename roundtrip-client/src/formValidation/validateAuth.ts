import { InitialState } from '../reducers';

interface ErrorKeys {
  email: string;
  password: string;
  name: string;
}

export default function validateAuth(values: InitialState) {
  let errors = {} as ErrorKeys;
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!values.name) {
    errors.name = 'Required name';
  } else if (values.name.length < 2) {
    errors.name = 'name must be at least more than 3 characters';
  }
  return errors;
}
