import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

import Button from 'components/PhoneBook/Button';
import Title from 'components/PhoneBook/Title';
import Box from 'components/PhoneBook/Box';

import {
  StyledLoginForm,
  InputStyled,
  LabelStyled,
  StyledFormLabel,
  ErrorText,
  StyledInputIconEmail,
  StyledInputIconPassword,
} from 'components/PhoneBook/Form/Form.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailMessage = 'Please enter a valid email address';
  const passwordMessage = 'Please enter your password';

  const initialValues = {
    email: '',
    password: '',
  };

  const errorMessage = type => {
    switch (type) {
      case 'email':
        return emailMessage;
      case 'password':
        return passwordMessage;
      default:
        return;
    }
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(emailMessage),
    password: yup.string().required(),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={() => {
          return <ErrorText>{errorMessage(name)}</ErrorText>;
        }}
      />
    );
  };

  const handleSubmit = (values, actions) => {
    // const data = new FormData(e.currentTarget);
    dispatch(signIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledLoginForm /* autoComplete="off" */>
        <Title>Sign in to Phonebook</Title>

        <LabelStyled>
          <StyledFormLabel>E-mail</StyledFormLabel>
          <Box position="relative">
            <InputStyled
              type="email"
              name="email"
              placeholder="Enter your e-mail"

              // autocomplete="off"
            />
            <StyledInputIconEmail />
          </Box>
          <FormError name="email" />
        </LabelStyled>

        <LabelStyled>
          <StyledFormLabel>Password</StyledFormLabel>
          <Box position="relative">
            <StyledInputIconPassword />
            <InputStyled
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </Box>
          <FormError name="password" />
        </LabelStyled>

        <Button style={{ marginTop: 10 }} type="submit">
          Sign in
        </Button>
      </StyledLoginForm>
    </Formik>
  );
}
