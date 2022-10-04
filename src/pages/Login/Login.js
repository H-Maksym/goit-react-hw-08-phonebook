import Modal from 'components/PhoneBook/Modal';
import LoginForm from 'components/PhoneBook/Form/LoginForm';
import useToggleModal from 'hooks/toggleModal';

export default function Login() {
  const { closeModal } = useToggleModal();
  return (
    <Modal closeModal={() => closeModal('/')}>
      <LoginForm />
    </Modal>
  );
}
