import React, { SyntheticEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions';
import { InitialState } from '../reducers';

interface ErrorKeys {
  email?: string;
  password?: string;
  name?: string;
}

function useFormValidation(
  initialState: InitialState,
  validate: (values: InitialState) => ErrorKeys,
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({} as ErrorKeys);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // console.log('authenticated!', values.email, values.password);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  const handleChange = (event: SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmitReg = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    dispatch(register(values));
    setErrors(validationErrors);
    setSubmitting(true);
    setValues(initialState);
  };

  const handleSubmitLogin = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    dispatch(register(values));
    setErrors(validationErrors);
    setSubmitting(true);
    setValues(initialState);
  };

  return {
    handleSubmitReg,
    handleSubmitLogin,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
