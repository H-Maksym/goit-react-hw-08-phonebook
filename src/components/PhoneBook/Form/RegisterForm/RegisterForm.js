import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import Button from 'components/PhoneBook/Button';
import Title from 'components/PhoneBook/Title';
import Box from 'components/PhoneBook/Box';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import {
  StyledLoginForm,
  InputStyled,
  LabelStyled,
  StyledFormLabel,
  ErrorText,
  StyledInputIconEmail,
  StyledInputIconPassword,
  StyledInputIconName,
} from 'components/PhoneBook/Form/Form.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const nameMessage = 'Please enter your name';
  const emailMessage = 'Please enter a valid email address';
  const passwordMessage = 'Please enter your password, Minimum 6 symbols';

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  let schema = yup.object().shape({
    name: yup.string().required(nameMessage),
    email: yup.string().email().required(emailMessage),
    password: yup.string().min(6).required(passwordMessage),
  });

  const errorMessage = type => {
    switch (type) {
      case 'name':
        return nameMessage;
      case 'email':
        return emailMessage;
      case 'password':
        return passwordMessage;
      default:
        return;
    }
  };

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
    dispatch(signUp(values));

    if (isLoggedIn) {
      navigate('usermenu', { replace: true });
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledLoginForm>
        <Title>Sign up to Phonebook</Title>

        <LabelStyled>
          <StyledFormLabel>Name</StyledFormLabel>
          <Box position="relative">
            <InputStyled
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <StyledInputIconName />
          </Box>
          <FormError name="name" />
        </LabelStyled>

        <LabelStyled>
          <StyledFormLabel>E-mail</StyledFormLabel>
          <Box position="relative">
            <InputStyled
              type="email"
              name="email"
              placeholder="Enter your e-mail"
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
          Sign up
        </Button>
      </StyledLoginForm>
    </Formik>
  );
}
