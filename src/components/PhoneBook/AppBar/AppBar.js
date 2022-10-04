import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import useToggleModal from 'hooks/toggleModal';

//* Components
import Title from 'components/PhoneBook/Title';
import ContactForm from 'components/PhoneBook/Form/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import ContactList from 'components/PhoneBook/ContactList';
import Notification from 'components/PhoneBook/Notification';
import Box from 'components/PhoneBook/Box';
import Modal from 'components/PhoneBook/Modal';
import AddContact from 'components/PhoneBook/AddContact';
import Loader from 'components/Loader';

export default function AppBar() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        mx="auto"
        px={15}
        py={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={450}
        as="section"
      >
        <Title>Phone-Book</Title>

        <AddContact toggleModal={() => openModal()} />

        {isOpen && (
          <Modal
            closeModal={() => closeModal('/usermenu')}
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
          >
            <ContactForm title="Fill in the contact details" />
          </Modal>
        )}
      </Box>

      {error && <div>Error...</div>}
      {isLoading && <Loader />}

      <Box
        mx="auto"
        px={15}
        py={0}
        display="flex"
        flexDirection="column"
        width={450}
        as="section"
      >
        <Title>Contacts</Title>

        {contacts.length > 0 ? (
          <>
            <Filter name="filter" />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts" />
        )}
      </Box>
    </>
  );
}
