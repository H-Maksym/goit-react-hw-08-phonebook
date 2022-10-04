import Modal from 'components/PhoneBook/Modal';
import RegistrationForm from 'components/PhoneBook/Form/RegisterForm';
import useToggleModal from 'hooks/toggleModal';

export default function Register() {
  const { closeModal } = useToggleModal();

  return (
    <Modal closeModal={() => closeModal('/')}>
      <RegistrationForm />
    </Modal>
  );
}
