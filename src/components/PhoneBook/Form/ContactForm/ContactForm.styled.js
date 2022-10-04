import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${p => `${p.theme.space[7] * 3}px`};
  height: auto;

  padding: ${p => `${p.theme.space[3]}px`};

  color: ${p => p.theme.colors.form.formText};
  border-radius: ${p => p.theme.radii.lg};
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

export const StyledFormLabel = styled.span`
  display: block;
  margin-bottom: ${p => `${p.theme.space[2]}px`};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.s};
  color: ${p => p.theme.colors.text.accent};
`;

export const InputStyled = styled.input`
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

export const StyledInputIconName = styled(AiOutlineUser)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`;

export const StyledInputIconNumber = styled(BsTelephone)`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`;
