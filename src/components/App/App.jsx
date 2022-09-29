import { useEffect } from 'react';
import useToggleModal from 'hooks/toggleModal';

//* Components
import Title from 'components/PhoneBook/Title';
import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import ContactList from 'components/PhoneBook/ContactList';
import Notification from 'components/PhoneBook/Notification';
import Box from 'components/PhoneBook/Box';
import Modal from 'components/PhoneBook/Modal';
import AddContact from 'components/PhoneBook/AddContact';
import Loader from 'components/Loader';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';

export default function App() {
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
        <h1>React</h1>
        <Title>Phone-Book</Title>

        <AddContact toggleModal={() => openModal()} />

        {isOpen && (
          <Modal
            closeModal={closeModal}
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
