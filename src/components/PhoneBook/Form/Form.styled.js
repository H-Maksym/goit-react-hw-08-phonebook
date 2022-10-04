import styled from 'styled-components';
import { Form, Field } from 'formik';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

export const StyledLoginForm = styled(Form)`
  color: ${p => p.theme.colors.form.formText};
  border-radius: ${p => p.theme.radii.lg};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${p => `${p.theme.space[7] * 3}px`};
  /* height: auto; */
  /* gap: ${p => `${p.theme.space[4]}px`}; */
  /* border: ${p => p.theme.borders.normal + p.theme.colors.accent}; */
`;

export const LabelStyled = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.form};
  text-transform: ${p => p.theme.textTransform.cap};
  letter-spacing: ${p => p.theme.letterSpacing.s};
  &:focus-within {
    color: ${p => p.theme.colors.text.accent};
  }
`;

export const InputStyled = styled(Field)`
  width: 100%;
  height: ${p => `${p.theme.space[5] + 8}px`};
  box-sizing: border-box;
  padding: ${p =>
    `${p.theme.space[3]}px ` +
    `${p.theme.space[2] + 1}px ` +
    `${p.theme.space[3]}px ` +
    `${p.theme.space[5]}px`};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.s};
  border-color: ${p => p.theme.colors.form.formBorder};
  border-radius: ${p => p.theme.radii.lg};
  border-width: ${p => `${p.theme.space[1]}px`};
  outline: ${p => p.theme.borders.none};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.17;
    letter-spacing: 0.01em;
  }
  &:focus {
    border-color: ${p => p.theme.colors.form.formInputBorder};
    fill: ${p => p.theme.colors.text.accent};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  left: 10%;
  /* transform: translateX(-10%); */
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: ${p => p.theme.textTransform.lowCase};
  font-style: italic;
  text-align: center;
  color: ${p => p.theme.colors.form.formErrorMessage};
`;

export const StyledFormLabel = styled.span`
  display: block;
  margin-bottom: ${p => `${p.theme.space[2]}px`};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.s};
  color: ${p => p.theme.colors.text.accent};
`;

export const StyledInputIconEmail = styled(AiOutlineMail)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`;

export const StyledInputIconPassword = styled(RiLockPasswordLine)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`;

export const StyledInputIconName = styled(AiOutlineUser)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`;
