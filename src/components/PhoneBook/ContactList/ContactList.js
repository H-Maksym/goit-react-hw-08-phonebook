import React from 'react';
import ContactItem from 'components/PhoneBook/ContactList/ContactItem';
import { StyledContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <StyledContactItem key={contact.id}>
            <ContactItem contact={contact} />
          </StyledContactItem>
        );
      })}
    </ul>
  );
}
