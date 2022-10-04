import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[7] + 50}px`};
  text-transform: ${p => p.theme.textTransform.cap};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.form};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.button.text};
  background-color: ${p => p.theme.colors.button.primaryBtnBackground};

  border: ${p => p.theme.borders.normal + p.theme.colors.button.btnShadow};

  border-radius: ${p => p.theme.radii.xl};

  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  :hover {
    background-color: ${p => p.theme.colors.button.accentBtnBackground};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: ${p => p.theme.colors.white};
    transform: translateY(${p => ` ${p.theme.space[3] * -1}px`});
  }
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledRight = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.Bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.accent};
`;

export const MainTitle = styled.h3`
  text-align: center;
  color: ${p => p.theme.colors.text.sectionTitle};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
`;
