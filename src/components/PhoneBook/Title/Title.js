import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

export default function Title({ style, children }) {
  return <StyledTitle style={style}>{children}</StyledTitle>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
