import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/PhoneBook/Button';
import { StyledTextList } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  function onDelContact() {
    if (isLoading) {
      return;
    }
    dispatch(deleteContact(contact));
  }

  return (
    <>
      <StyledTextList>{contact.name}</StyledTextList>
      <StyledTextList>{contact.number}</StyledTextList>
      <Button onClick={onDelContact}>Delete</Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};
